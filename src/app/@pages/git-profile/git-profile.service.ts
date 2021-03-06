import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Injectable()
export class GitProfileService {
  constructor(private readonly _httpService:HttpService) { }

  findUserByUsername(username:string):Observable<any> {
    return this._httpService.GitUser(`/${username}`).get();
  }

  getPublicActivity(username:string):Observable<any>{
    return this._httpService.GitUser(`/${username}/events`).get();
  }

  getPublicRepos(username:string):Observable<any>{
    return this._httpService.GitUser(`/${username}/repos`).get();
  }
}
