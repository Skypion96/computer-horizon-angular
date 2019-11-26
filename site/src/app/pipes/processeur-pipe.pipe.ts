import {Pipe, PipeTransform} from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {ProcMarque} from '../enums/proc-marque.enum';
import {Prix} from '../enums/prix.enum';

@Pipe({
  name: 'processeurPipe'
})
export class ProcesseurPipePipe implements PipeTransform {

  transform(procList: ProcList, filter: string, typePrix:Prix = Prix.ALL,typeMarque:ProcMarque = ProcMarque.ALL): ProcList {

    //TOUTES MARQUES
    if(!filter && typePrix==Prix.INF400 && typeMarque==ProcMarque.ALL){
      return procList.filter(proc=>proc.prix <= 400.00);
    }
    else if(!filter && typePrix==Prix.INF1000 && typeMarque==ProcMarque.ALL){
      return procList.filter(proc=>proc.prix <= 1000.00 && proc.prix > 400.00);
    }
    else if(!filter && typePrix==Prix.SUP1000 && typeMarque==ProcMarque.ALL){
      return procList.filter(proc=>proc.prix > 1000.00);
    }
    else if(!filter && typePrix==Prix.ALL && typeMarque==ProcMarque.ALL){
      return procList;
    }


    //UNIQUEMENT INTEL
    else if(!filter && typePrix==Prix.INF400 && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix <= 400.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==Prix.INF1000 && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==Prix.SUP1000 && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix > 1000.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==Prix.ALL && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix > 0.00 && proc.marque.includes("Intel"));
    }

    //UNIQUEMENT AMD
    else if(!filter && typePrix==Prix.INF400 && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix <= 400.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==Prix.INF1000 && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==Prix.SUP1000 && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix > 1000.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==Prix.ALL && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix > 0.00 && proc.marque.includes("AMD"));
    }


    //SI LE NOM N'EST PAS VIDE
    else{
      //TOUTES MARQUES
       if(typePrix==Prix.INF400 && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00);
       }
       else if(typePrix==Prix.INF1000 && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00 && proc.prix > 400.00 );
       }
       else if(typePrix==Prix.SUP1000 && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00);
       }
       else if(typePrix==Prix.ALL && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00);
       }
       //UNIQUEMENT INTEL
       else if(typePrix==Prix.INF400 && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==Prix.INF1000 && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==Prix.SUP1000 && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==Prix.ALL && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00 && proc.marque.includes("Intel"));
       }
       //UNIQUEMENT AMD
       else if(typePrix==Prix.INF400 && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==Prix.INF1000 && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==Prix.SUP1000 && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==Prix.ALL && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00 && proc.marque.includes("AMD"));
       }
     }


  }


}
