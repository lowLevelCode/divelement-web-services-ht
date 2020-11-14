import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitProfileRoutingModule } from './git-profile-routing.module';
import { GitProfileComponent } from './git-profile.component';
import { HttpService } from 'src/app/services/http.service';
import { GitProfileService } from './git-profile.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatDividerModule } from "@angular/material/divider";
@NgModule({
  declarations: [GitProfileComponent],
  imports: [
    CommonModule,
    GitProfileRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatDividerModule
  ],
  providers:[HttpService, GitProfileService]
})
export class GitProfileModule { }
