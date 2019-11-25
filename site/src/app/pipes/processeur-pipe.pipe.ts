import {Pipe, PipeTransform} from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {ProcPrix} from '../enums/proc-prix.enum';
import {ProcMarque} from '../enums/proc-marque.enum';

@Pipe({
  name: 'processeurPipe'
})
export class ProcesseurPipePipe implements PipeTransform {

  transform(procList: ProcList, filter: string, typePrix:ProcPrix = ProcPrix.ALL,typeMarque:ProcMarque = ProcMarque.ALL): ProcList {

    //TOUTES MARQUES
    if(!filter && typePrix==ProcPrix.SUP400 && typeMarque==ProcMarque.ALL){
      return procList.filter(proc=>proc.prix <= 400.00);
    }
    else if(!filter && typePrix==ProcPrix.SUP1000 && typeMarque==ProcMarque.ALL){
      return procList.filter(proc=>proc.prix <= 1000.00 && proc.prix > 400.00);
    }
    else if(!filter && typePrix==ProcPrix.SUP1001 && typeMarque==ProcMarque.ALL){
      return procList.filter(proc=>proc.prix > 1000.00);
    }
    else if(!filter && typePrix==ProcPrix.ALL && typeMarque==ProcMarque.ALL){
      return procList;
    }


    //UNIQUEMENT INTEL
    else if(!filter && typePrix==ProcPrix.SUP400 && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix <= 400.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==ProcPrix.SUP1000 && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==ProcPrix.SUP1001 && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix > 1000.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==ProcPrix.ALL && typeMarque==ProcMarque.Intel){
      return procList.filter(proc=>proc.prix > 0.00 && proc.marque.includes("Intel"));
    }

    //UNIQUEMENT AMD
    else if(!filter && typePrix==ProcPrix.SUP400 && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix <= 400.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==ProcPrix.SUP1000 && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==ProcPrix.SUP1001 && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix > 1000.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==ProcPrix.ALL && typeMarque==ProcMarque.AMD){
      return procList.filter(proc=>proc.prix > 0.00 && proc.marque.includes("AMD"));
    }


    //SI LE NOM N'EST PAS VIDE
    else{
      //TOUTES MARQUES
       if(typePrix==ProcPrix.SUP400 && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00);
       }
       else if(typePrix==ProcPrix.SUP1000 && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00 && proc.prix > 400.00 );
       }
       else if(typePrix==ProcPrix.SUP1001 && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00);
       }
       else if(typePrix==ProcPrix.ALL && typeMarque==ProcMarque.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00);
       }
       //UNIQUEMENT INTEL
       else if(typePrix==ProcPrix.SUP400 && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==ProcPrix.SUP1000 && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==ProcPrix.SUP1001 && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==ProcPrix.ALL && typeMarque==ProcMarque.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00 && proc.marque.includes("Intel"));
       }
       //UNIQUEMENT AMD
       else if(typePrix==ProcPrix.SUP400 && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==ProcPrix.SUP1000 && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==ProcPrix.SUP1001 && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==ProcPrix.ALL && typeMarque==ProcMarque.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00 && proc.marque.includes("AMD"));
       }
     }


  }


}
