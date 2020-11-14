import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path: 'home', loadChildren: () => import('./@pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'repo', loadChildren: () => import('./@pages/repo/repo.module').then(m => m.RepoModule) },
  { path: 'git-profile/:username', loadChildren: () => import('./@pages/git-profile/git-profile.module').then(m => m.GitProfileModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
