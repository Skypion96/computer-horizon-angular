import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteG'
})
export class CarteGPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
