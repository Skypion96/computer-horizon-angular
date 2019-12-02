import {Pipe, PipeTransform} from '@angular/core';
import {ProcList} from '../interfaces/procDTO';
import {Prix} from '../enums/prix.enum';
import {Marques} from '../enums/marques.enum';

@Pipe({
  name: 'processeurPipe'
})
export class ProcesseurPipePipe implements PipeTransform {

  transform(procList: ProcList, filter: string, typePrix:Prix = Prix.ALL,typeMarque:Marques = Marques.ALL): ProcList {

    //TOUTES MARQUES
    if(!filter && typePrix==Prix.INF400 && typeMarque==Marques.ALL){
      return procList.filter(proc=>proc.prix <= 400.00);
    }
    else if(!filter && typePrix==Prix.INF1000 && typeMarque==Marques.ALL){
      return procList.filter(proc=>proc.prix <= 1000.00 && proc.prix > 400.00);
    }
    else if(!filter && typePrix==Prix.SUP1000 && typeMarque==Marques.ALL){
      return procList.filter(proc=>proc.prix > 1000.00);
    }
    else if(!filter && typePrix==Prix.ALL && typeMarque==Marques.ALL){
      return procList;
    }


    //UNIQUEMENT INTEL
    else if(!filter && typePrix==Prix.INF400 && typeMarque==Marques.Intel){
      return procList.filter(proc=>proc.prix <= 400.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==Prix.INF1000 && typeMarque==Marques.Intel){
      return procList.filter(proc=>proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==Prix.SUP1000 && typeMarque==Marques.Intel){
      return procList.filter(proc=>proc.prix > 1000.00 && proc.marque.includes("Intel"));
    }
    else if(!filter && typePrix==Prix.ALL && typeMarque==Marques.Intel){
      return procList.filter(proc=>proc.prix > 0.00 && proc.marque.includes("Intel"));
    }

    //UNIQUEMENT AMD
    else if(!filter && typePrix==Prix.INF400 && typeMarque==Marques.AMD){
      return procList.filter(proc=>proc.prix <= 400.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==Prix.INF1000 && typeMarque==Marques.AMD){
      return procList.filter(proc=>proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==Prix.SUP1000 && typeMarque==Marques.AMD){
      return procList.filter(proc=>proc.prix > 1000.00 && proc.marque.includes("AMD"));
    }
    else if(!filter && typePrix==Prix.ALL && typeMarque==Marques.AMD){
      return procList.filter(proc=>proc.prix > 0.00 && proc.marque.includes("AMD"));
    }


    //SI LE NOM N'EST PAS VIDE
    else{
      //TOUTES MARQUES
       if(typePrix==Prix.INF400 && typeMarque==Marques.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00);
       }
       else if(typePrix==Prix.INF1000 && typeMarque==Marques.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00 && proc.prix > 400.00 );
       }
       else if(typePrix==Prix.SUP1000 && typeMarque==Marques.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00);
       }
       else if(typePrix==Prix.ALL && typeMarque==Marques.ALL){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00);
       }
       //UNIQUEMENT INTEL
       else if(typePrix==Prix.INF400 && typeMarque==Marques.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==Prix.INF1000 && typeMarque==Marques.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==Prix.SUP1000 && typeMarque==Marques.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00 && proc.marque.includes("Intel"));
       }
       else if(typePrix==Prix.ALL && typeMarque==Marques.Intel){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00 && proc.marque.includes("Intel"));
       }
       //UNIQUEMENT AMD
       else if(typePrix==Prix.INF400 && typeMarque==Marques.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 400.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==Prix.INF1000 && typeMarque==Marques.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix <= 1000.00  && proc.prix > 400.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==Prix.SUP1000 && typeMarque==Marques.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 1000.00 && proc.marque.includes("AMD"));
       }
       else if(typePrix==Prix.ALL && typeMarque==Marques.AMD){
         return procList.filter(proc=>proc.nom.includes(filter) && proc.prix > 0.00 && proc.marque.includes("AMD"));
       }
     }


  }


}
