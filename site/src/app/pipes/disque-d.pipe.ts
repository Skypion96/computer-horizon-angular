import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disqueD'
})
export class DisqueDPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
