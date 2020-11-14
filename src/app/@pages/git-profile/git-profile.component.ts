import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitProfileService } from './git-profile.service';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.scss']
})
export class GitProfileComponent implements OnInit {

  user:any;

  constructor(
    private route: ActivatedRoute, 
    private readonly _gitProfileService:GitProfileService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=> {
      const {username} = data;
      this._gitProfileService.findUserByUsername(username).subscribe(user=>{
        this.user = {
          login: `@${user.login}`,
          created_at:user.created_at,
          avatar_url: user.avatar_url
        }
      });
    });
  }  

}
