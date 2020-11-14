import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * get a substring with specific size
 * @example {{ value | stringCutter:8 }}
 */
@Pipe({name: 'stringCutter'})
export class StringCutterPipe implements PipeTransform {
  transform(value: string, size:number): string {
    return value.slice(0,size);
  }
}

@NgModule({
    declarations: [StringCutterPipe],
    imports: [ CommonModule ],
    exports: [StringCutterPipe],
    providers: [],
})
export class StringCutterModule {}