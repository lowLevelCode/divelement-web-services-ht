import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo-routing.module';
import { RepoComponent } from './repo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RepoComponent],
  imports: [
    CommonModule,
    RepoRoutingModule,
    HttpClientModule
  ]
})
export class RepoModule { }
