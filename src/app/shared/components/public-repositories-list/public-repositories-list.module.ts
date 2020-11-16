import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRepositoriesListComponent } from './public-repositories-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FromNowDateModule } from '../../pipes/from-now-date.module';



@NgModule({
  declarations: [PublicRepositoriesListComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    FromNowDateModule,
  ],
  exports:[PublicRepositoriesListComponent]
})
export class PublicRepositoriesListModule { }
