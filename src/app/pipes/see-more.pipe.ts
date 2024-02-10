import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(value: string, limit:number): unknown {
    return value.split(' ').slice(0,limit).join(' ');
  }

}
