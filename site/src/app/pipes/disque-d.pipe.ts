import { Pipe, PipeTransform } from '@angular/core';
import {ProcList} from '../interfaces/proc-interface';
import {DisqueDList} from '../interfaces/disque-dinterface';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {DisqueDMarque} from '../enums/disque-d-marque.enum';
import {DisqueDPrix} from '../enums/disque-d-prix.enum';

@Pipe({
  name: 'disqueD'
})
export class DisqueDPipe implements PipeTransform {

  transform(disqueDList: DisqueDList,typeSSD:DisqueDSsd=DisqueDSsd.ALL,typeMarque:DisqueDMarque=DisqueDMarque.ALL,typePrix:DisqueDPrix=DisqueDPrix.ALL): DisqueDList {

    if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.ALL){
      return disqueDList;
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.ssd);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>!dd.ssd);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie"));
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba"));
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.ALL){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate"));
    }




//PRIX INF400
    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.prix<=400.00);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie") && dd.prix<=400.00);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba") && dd.prix<=400.00);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate") && dd.prix<=400.00);
    }


//PRIX SUP400 et inf 1000
    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.prix>400.00 && dd.prix<=1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie") && dd.prix>400.00 && dd.prix<=1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba") && dd.prix>400.00 && dd.prix<=1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate") && dd.prix>400.00 && dd.prix<=1000);
    }


    //PRIX SUP1000
    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.prix>1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie") && dd.prix>1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba") && dd.prix>1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==DisqueDPrix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate") && dd.prix>1000);
    }
  }

}
