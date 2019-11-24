import { Pipe, PipeTransform } from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {DisqueDList} from '../interfaces/disque-dinterface';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {DisqueDMarque} from '../enums/disque-d-marque.enum';

@Pipe({
  name: 'disqueD'
})
export class DisqueDPipe implements PipeTransform {

  transform(disqueDList: DisqueDList,typeSSD:DisqueDSsd=DisqueDSsd.ALL,typeMarque:DisqueDMarque=DisqueDMarque.ALL): DisqueDList {

    if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL){
      return disqueDList;
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL){
      return disqueDList.filter(dd=>dd.ssd);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL){
      return disqueDList.filter(dd=>!dd.ssd);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie"));
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.INTENSO){
      return disqueDList.filter(dd=>dd.marque.includes("Intenso"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.INTENSO){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Intenso"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.INTENSO){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Intenso"));
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate"));
    }
  }

}
