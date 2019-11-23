import {Pipe, PipeTransform} from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {ProcPrix} from '../enums/proc-prix.enum';

@Pipe({
  name: 'processeurPipe'
})
export class ProcesseurPipePipe implements PipeTransform {

  transform(procList: ProcList, filter: string, type:ProcPrix = ProcPrix.SUP400): ProcList {

    if(!filter && type==ProcPrix.SUP400){
      return procList.filter(proc=>proc.prix <= 400.00);
    }
    else if(!filter && type==ProcPrix.SUP1000){
      return procList.filter(proc=>proc.prix <= 1000.00);
    }
    else if(!filter && type==ProcPrix.SUP1001){
      return procList.filter(proc=>proc.prix > 1000.00);
    }
    else{
       if(type==ProcPrix.SUP400){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00);
       }
       else if(type==ProcPrix.SUP1000){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00);
       }
       else if(type==ProcPrix.SUP1001){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00);
       }
     }


  }


}
