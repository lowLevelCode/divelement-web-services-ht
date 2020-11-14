import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitProfileService } from './git-profile.service';

interface Activity {
  title:string;
  iconName:string;
}


@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.scss']
})
export class GitProfileComponent implements OnInit {

  user:any;
  activities:any[];

  constructor(
    private route: ActivatedRoute, 
    private readonly _gitProfileService:GitProfileService) { }

  ngOnInit(): void {
    // find user
    this.route.params.subscribe(data=> {
      const {username} = data;
      this._gitProfileService.findUserByUsername(username).subscribe(user=>{
        this.user = {
          login: `@${user.login}`,
          created_at:user.created_at,
          avatar_url: user.avatar_url
        }
      });

      // get public activity 
      this._gitProfileService.getPublicActivity(username).subscribe(act=> {
        console.log("activity", act);
      })
    });    
  }  

}
