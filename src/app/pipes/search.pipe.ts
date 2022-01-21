import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: number, power:number): unknown {
    return JSON.stringify(Math.pow(value, power));
  }

}
