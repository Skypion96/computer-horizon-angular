import {Pipe, PipeTransform} from '@angular/core';
import {CarteGList} from '../interfaces/carte-gDTO';
import {Prix} from '../enums/prix.enum';
import {Marques} from '../enums/marques.enum';
import {DisqueDSsd} from '../enums/disque-d-ssd.enum';

@Pipe({
  name: 'carteG'
})
export class CarteGPipe implements PipeTransform {

  transform(carteList:CarteGList,typePrix:Prix=Prix.ALL, filter: string,typeMarque:Marques=Marques.ALL,typeSSD : DisqueDSsd=DisqueDSsd.ALL): any {
    if(typeSSD == DisqueDSsd.ALL) {
      if (!filter) {
        if (typePrix == Prix.ALL && typeMarque == Marques.ALL) {
          return carteList;
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.prix <= 400.00);
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00);
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.prix > 1000.00);
        } else if (typePrix == Prix.ALL && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.marque.includes("MSI"));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.marque.includes("MSI"));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.marque.includes("MSI"));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.marque.includes("MSI"));
        } else if (typePrix == Prix.ALL && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.marque.includes("ASUS"));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.marque.includes("ASUS"));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.marque.includes("ASUS"));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.marque.includes("ASUS"));
        } else if (typePrix == Prix.ALL && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.marque.includes("Gigabyte"));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.marque.includes("Gigabyte"));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.marque.includes("Gigabyte"));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.marque.includes("Gigabyte"));
        }
      } else {
        if (typePrix == Prix.ALL && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.nom.includes(filter));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.nom.includes(filter));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.ALL) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.nom.includes(filter));
        } else if (typePrix == Prix.ALL && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.marque.includes("MSI") && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.marque.includes("MSI") && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.marque.includes("MSI") && cg.nom.includes(filter));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.MSI) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.marque.includes("MSI") && cg.nom.includes(filter));
        } else if (typePrix == Prix.ALL && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.marque.includes("ASUS") && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.marque.includes("ASUS") && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.marque.includes("ASUS") && cg.nom.includes(filter));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.ASUS) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.marque.includes("ASUS") && cg.nom.includes(filter));
        } else if (typePrix == Prix.ALL && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.marque.includes("Gigabyte") && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF400 && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.prix <= 400.00 && cg.marque.includes("Gigabyte") && cg.nom.includes(filter));
        } else if (typePrix == Prix.INF1000 && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.prix > 400.00 && cg.prix <= 1000.00 && cg.marque.includes("Gigabyte") && cg.nom.includes(filter));
        } else if (typePrix == Prix.SUP1000 && typeMarque == Marques.Gigabyte) {
          return carteList.filter(cg => cg.prix > 1000.00 && cg.marque.includes("Gigabyte") && cg.nom.includes(filter));
        }
      }
    }

  }

}
