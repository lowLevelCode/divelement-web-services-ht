import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo-routing.module';
import { RepoComponent } from './repo.component';


@NgModule({
  declarations: [RepoComponent],
  imports: [
    CommonModule,
    RepoRoutingModule
  ]
})
export class RepoModule { }
