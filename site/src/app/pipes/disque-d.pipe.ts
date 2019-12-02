import { Pipe, PipeTransform } from '@angular/core';
import {ProcList} from '../interfaces/procDTO';
import {DisqueDList} from '../interfaces/disque-dDTO';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';
import {Prix} from '../enums/prix.enum';
import {Marques} from '../enums/marques.enum';

@Pipe({
  name: 'disqueD'
})
export class DisqueDPipe implements PipeTransform {

  transform(disqueDList: DisqueDList, filter: string,typeSSD:DisqueDSsd=DisqueDSsd.ALL,typeMarque:Marques=Marques.ALL,typePrix:Prix=Prix.ALL): DisqueDList {

    if(!filter) {
      if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.ALL) {
        return disqueDList;
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie"));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie"));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie"));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba"));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba"));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba"));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate"));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate"));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate"));
      }




      //PRIX INF400
      else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.prix <= 400.00);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.prix <= 400.00);
      }


      //PRIX SUP400 et inf 1000
      else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.prix > 400.00 && dd.prix <= 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.prix > 400.00 && dd.prix <= 1000);
      }


      //PRIX SUP1000
      else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.prix > 1000);
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.prix > 1000);
      }
    }
    else {
      if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.ALL) {
        return disqueDList.filter(dd=>dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.ALL) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.nom.includes(filter));
      }




      //PRIX INF400
      else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.prix <= 400.00 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.INF400) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.prix <= 400.00 && dd.nom.includes(filter));
      }


      //PRIX SUP400 et inf 1000
      else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.INF1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.prix > 400.00 && dd.prix <= 1000 && dd.nom.includes(filter));
      }


      //PRIX SUP1000
      else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.ALL && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.ALL && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.ALL && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.LACIE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.marque.includes("Lacie") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.LACIE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Lacie") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.LACIE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Lacie") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.TOSHIBA && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.marque.includes("Toshiba") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.TOSHIBA && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.TOSHIBA && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Toshiba") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.ALL && typeMarque == Marques.SEAGATE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.marque.includes("Seagate") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.AVEC && typeMarque == Marques.SEAGATE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => dd.ssd && dd.marque.includes("Seagate") && dd.prix > 1000 && dd.nom.includes(filter));
      } else if (typeSSD == DisqueDSsd.SANS && typeMarque == Marques.SEAGATE && typePrix == Prix.SUP1000) {
        return disqueDList.filter(dd => !dd.ssd && dd.marque.includes("Seagate") && dd.prix > 1000 && dd.nom.includes(filter));
      }
    }
  }

}
