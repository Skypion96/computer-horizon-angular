import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinateur'
})
export class OrdinateurPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
