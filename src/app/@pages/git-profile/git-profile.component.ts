import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitProfileService } from './git-profile.service';

interface Repository{
  iconName:string;
  name:string;
  description:string;
  created_at:Date;
}

interface Activity {
  iconName:string;
  username:string;
  userlogin:string;
  created_at:Date;
  typeActivityDescription:string;  
  sha:string;
  message:string;
}

export enum TypeGitEvent {
  PUSH = 'PushEvent',
  CREATE = 'CreateEvent',
}

export const gitTypeEvent = [
  {
      type:TypeGitEvent.PUSH,
      iconName:'linear_scale',
      event:'Pushed'
  },
  {
    type:TypeGitEvent.CREATE,
    iconName:'autorenew',
    event:'Created'
  }
];


@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.scss']
})
export class GitProfileComponent implements OnInit {

  user:any;  
  activities: Activity[] = [];  
  repositories: Repository[] = [];

  constructor(    
    private route: ActivatedRoute, 
    private readonly _gitProfileService:GitProfileService) { }

  ngOnInit(): void {

    // find user
    this.route.params.subscribe(data=> {
      const {username} = data;      
      this._gitProfileService.findUserByUsername(username).subscribe(user=>{
        this.user = {
          name:user.name,
          login: `@${user.login}`,
          created_at:user.created_at,
          avatar_url: user.avatar_url
        }
      });

      // get public activity 
      this._gitProfileService.getPublicActivity(username).subscribe(act=> {        
        act.forEach(e => {                                      
          let activity:any;
          // maybe this should be a factory
          if(e.type == TypeGitEvent.PUSH){ // if is a puss event, the paylod contains commits.            
            this.activities.push(
              ...this.CreateGitEventPushDataType(e)
            )
          }          
          else if(e.type == TypeGitEvent.CREATE){
            this.activities.push(this.CreateGitEventCreateDataType(e));
          }
        });        
      });

      // get public repos
      this._gitProfileService.getPublicRepos(username).subscribe(repos=>{
        this.repositories = repos.map(this.CreateGitUserReposDataType);        
      });

    });    
  }

  // *** The factories ***

  private CreateGitEventPushDataType(data): any[]{
    const {iconName, event} = gitTypeEvent.find(gitType=> gitType.type == data.type);
    const {actor:{login}, repo:{name}, created_at} = data;
    const {payload:{commits}} = data;    

    return commits.map(element => {      
      const {sha, message} = element;
      return {
        iconName,
        username: '',
        userlogin: login,
        created_at:created_at,
        typeActivityDescription:`${event} to branch master at ${name}`,                
        sha:sha.slice(0,8),
        message: `· ${message}`
      };
    });

  }

  private CreateGitEventCreateDataType(data): any{
    const {iconName, event} = gitTypeEvent.find(gitType=> gitType.type == data.type);
    const {actor:{login}, repo:{name}, created_at} = data;    
    const {payload:{description}} = data;        

    return {
      iconName,
      username: '',
      userlogin: login,
      created_at:created_at,
      typeActivityDescription:`${event} at ${name}`,
      sha:'',
      message: `${description || 'No description'}`
    };    
  }

  private CreateGitUserReposDataType(data): Repository{
    const {name, description, created_at} = data;        
    return {
      iconName:'view_agenda',
      name,
      description: description || 'Not Description.',
      created_at
    }
  }

}
