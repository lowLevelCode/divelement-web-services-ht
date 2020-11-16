import { environment } from 'src/environments/environment';

export class AppEndpoint {
    public static URL_API_GIT = `${environment.gitApiBaseUrl}`;
    public static URL_API_GIT_REPOS = `${environment.gitApiBaseUrl}/repos/${environment.userlogin}/${environment.reponame}`;
    public static URL_API_GIT_USER = `${environment.gitApiBaseUrl}/users`;
}
  