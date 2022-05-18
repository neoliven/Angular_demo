import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'enlarge'})
export class enlargePipe implements PipeTransform {
  transform(value: any): any {
    return value * 10
  }
}