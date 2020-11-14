import { Component, OnInit } from '@angular/core';
import { RouterPath } from 'src/app/app.routes';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  commits:any[] = [];
  constructor(private readonly _httpService:HttpService) { }

  ngOnInit(): void {
    this._httpService.GitRepos("/commits").get().subscribe(
      data=> {
        this.commits = (data as any).map(element => {            
            const { sha, author:{avatar_url,login},  commit:{author, message} } = element;
            const routerToUser = `${RouterPath.gitProfile}/${login}`;            
            return  { sha, avatar_url, login, author, message, routerToUser };
        });
        console.log(this.commits)
      }
    );
  }

}
