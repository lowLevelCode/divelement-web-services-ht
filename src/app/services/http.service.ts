import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { share } from "rxjs/operators";
import { AppEndpoint } from '../app.endpoint';

@Injectable()
export class HttpService {

    constructor(private readonly _http:HttpClient){}

    public get(url: string){
        return this._http.get(url);
    }
    public post(url: string, body?: any, httpOptions?: any){
        return this._http.post(url, body ,httpOptions);
    }
    public put(url: string, body?: any, httpOptions?: any){
        return this._http.put(url, body ,httpOptions);
    }
    public delete(url: string){
        return this._http.delete(url);
    }

    private operationsBuilder(URL: string) {
        return {
            get: ( httpOptions? ) => this._http.get( URL, httpOptions ).pipe( share() ),
            post:( body?, httpOptions? ) => this._http.post( URL, body, httpOptions ).pipe( share() ),
            put: ( body?,httpOptions?) => this._http.put( URL, body, httpOptions ).pipe( share() ),
            delete: ( httpOptions? ) => this._http.delete( URL, httpOptions ).pipe( share() ),
        };
    }

    Git = (moreUrl:string= '') => this.operationsBuilder(`${AppEndpoint.URL_API_GIT}${moreUrl}`);
    GitRepos = (moreUrl:string= '') => this.operationsBuilder(`${AppEndpoint.URL_API_GIT_REPOS}${moreUrl}`);    
}