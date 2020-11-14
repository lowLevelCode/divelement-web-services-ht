import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitProfileComponent } from './git-profile.component';

const routes: Routes = [{ path: '', component: GitProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitProfileRoutingModule { }
