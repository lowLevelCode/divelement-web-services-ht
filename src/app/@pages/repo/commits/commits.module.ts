import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsComponent } from './commits.component';
import { HttpService } from 'src/app/services/http.service';


@NgModule({
  declarations: [CommitsComponent],
  imports: [
    CommonModule,
    CommitsRoutingModule
  ],
  providers:[HttpService]
})
export class CommitsModule { }
