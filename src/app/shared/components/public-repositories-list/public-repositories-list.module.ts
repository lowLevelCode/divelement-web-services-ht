import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRepositoriesListComponent } from './public-repositories-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [PublicRepositoriesListComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule
  ],
  exports:[PublicRepositoriesListComponent]
})
export class PublicRepositoriesListModule { }
