import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';

/**
 * transform a date to a comparation with current date.
 * @example compare date: '2020-11-13T20:24:43Z' compare with current and then tranform date to '15 hours ago'
 */
@Pipe({name: 'fromNowDate'})
export class FromNowDatePipe implements PipeTransform {
  transform(value: Date): any {
    return moment(value).fromNow();
  }
}

@NgModule({
    declarations: [FromNowDatePipe],
    imports: [ CommonModule ],
    exports: [ FromNowDatePipe ],
    providers: [],
})
export class FromNowDateModule {}