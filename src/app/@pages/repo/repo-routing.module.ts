import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoComponent } from './repo.component';

const routes: Routes = [
  { 
    path: '', 
    component: RepoComponent,
    children:[
      { path: 'commits', loadChildren: () => import('./commits/commits.module').then(m => m.CommitsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoRoutingModule { }
