import { Pipe, PipeTransform } from '@angular/core';
import {ProcList} from '../interfaces/procDTO';
import {DisqueDList} from '../interfaces/disque-dDTO';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {DisqueDMarque} from '../enums/disque-d-marque.enum';
import {Prix} from '../enums/prix.enum';

@Pipe({
  name: 'disqueD'
})
export class DisqueDPipe implements PipeTransform {

  transform(disqueDList: DisqueDList,typeSSD:DisqueDSsd=DisqueDSsd.ALL,typeMarque:DisqueDMarque=DisqueDMarque.ALL,typePrix:Prix=Prix.ALL): DisqueDList {

    if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==Prix.ALL){
      return disqueDList;
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.ssd);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>!dd.ssd);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie"));
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba"));
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate"));
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate"));
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.ALL){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate"));
    }




//PRIX INF400
    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.prix<=400.00);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie") && dd.prix<=400.00);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba") && dd.prix<=400.00);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate") && dd.prix<=400.00);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.INF400){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate") && dd.prix<=400.00);
    }


//PRIX SUP400 et inf 1000
    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.prix>400.00 && dd.prix<=1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie") && dd.prix>400.00 && dd.prix<=1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba") && dd.prix>400.00 && dd.prix<=1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate") && dd.prix>400.00 && dd.prix<=1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.INF1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate") && dd.prix>400.00 && dd.prix<=1000);
    }


    //PRIX SUP1000
    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.ALL && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.ALL && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.ALL && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.prix>1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.marque.includes("Lacie") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Lacie") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.LACIE && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Lacie") && dd.prix>1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.marque.includes("Toshiba") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Toshiba") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.TOSHIBA && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Toshiba") && dd.prix>1000);
    }



    else if(typeSSD==DisqueDSsd.ALL && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.marque.includes("Seagate") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.AVEC && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>dd.ssd && dd.marque.includes("Seagate") && dd.prix>1000);
    }
    else if(typeSSD==DisqueDSsd.SANS && typeMarque==DisqueDMarque.SEAGATE && typePrix==Prix.SUP1000){
      return disqueDList.filter(dd=>!dd.ssd && dd.marque.includes("Seagate") && dd.prix>1000);
    }
  }

}
