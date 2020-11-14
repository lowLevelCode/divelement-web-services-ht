import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { CommitsComponent } from './commits.component';
import { HttpService } from 'src/app/services/http.service';
import { FromNowDateModule } from 'src/app/shared/pipes/from-now-date.module';
import { StringCutterModule } from 'src/app/shared/pipes/string-cutter.module';


@NgModule({
  declarations: [CommitsComponent],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    FromNowDateModule,
    StringCutterModule
  ],
  providers:[HttpService]
})
export class CommitsModule { }
