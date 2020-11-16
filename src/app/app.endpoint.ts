import { environment } from 'src/environments/environment';

export class AppEndpoint {
    public static URL_API_GIT = `${environment.gitApiBaseUrl}`;
    public static URL_API_GIT_REPOS = `${environment.gitApiBaseUrl}/repositories`;
    public static URL_API_GIT_USER = `${environment.gitApiBaseUrl}/users`;
}
  