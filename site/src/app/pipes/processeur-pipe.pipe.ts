import { Pipe, PipeTransform } from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';

@Pipe({
  name: 'processeurPipe'
})
export class ProcesseurPipePipe implements PipeTransform {

  transform(procList: ProcList, filter: string): ProcList {
    if(!filter){
      return procList;
    }
    return procList.filter(str => str.nom.includes(filter));
  }

}
