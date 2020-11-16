import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicActivityListComponent } from './public-activity-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FromNowDateModule } from '../../pipes/from-now-date.module';



@NgModule({
  declarations: [PublicActivityListComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    FromNowDateModule,
  ],
  exports:[PublicActivityListComponent]
})
export class PublicActivityListModule { }
