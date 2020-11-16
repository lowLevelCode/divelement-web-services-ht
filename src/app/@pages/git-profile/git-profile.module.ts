import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitProfileRoutingModule } from './git-profile-routing.module';
import { GitProfileComponent } from './git-profile.component';
import { HttpService } from 'src/app/services/http.service';
import { GitProfileService } from './git-profile.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs'; 
import { PublicActivityListModule } from 'src/app/shared/components/public-activity-list/public-activity-list.module';
import { PublicRepositoriesListModule } from 'src/app/shared/components/public-repositories-list/public-repositories-list.module';

@NgModule({
  declarations: [GitProfileComponent],
  imports: [
    CommonModule,
    GitProfileRoutingModule,
    HttpClientModule,
    MatTabsModule,    
    PublicActivityListModule,
    PublicRepositoriesListModule,
  ],
  providers:[HttpService, GitProfileService]
})
export class GitProfileModule { }
