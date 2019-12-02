import {Pipe, PipeTransform} from '@angular/core';
import {Prix} from '../enums/prix.enum';
import {OrdiList} from '../interfaces/ordiDTO';
import {Marques} from '../enums/marques.enum';

@Pipe({
  name: 'ordinateur'
})
export class OrdinateurPipe implements PipeTransform {

  transform(ordiList: OrdiList, filter: string,typePrix:Prix = Prix.ALL,typeMarque:Marques=Marques.ALL): any {
    if(!filter){
      if(typePrix == Prix.ALL && typeMarque==Marques.ALL){
        return ordiList;
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.prix <= 400.00);
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00);
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.prix > 1000.00);
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.marque.includes("ACER"));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("ACER"));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("ACER"));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("ACER"));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.marque.includes("ASUS"));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("ASUS"));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("ASUS"));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("ASUS"));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.marque.includes("HP"));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("HP"));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("HP"));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("HP"));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.marque.includes("MSI"));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("MSI"));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("MSI"));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("MSI"));
      }
    }
    else{
      if(typePrix == Prix.ALL && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.ALL){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.nom.includes(filter));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.marque.includes("ACER") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("ACER") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("ACER") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.ACER){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("ACER") && ordi.nom.includes(filter));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.marque.includes("ASUS") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("ASUS") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("ASUS") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.ASUS){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("ASUS") && ordi.nom.includes(filter));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.marque.includes("HP") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("HP") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("HP") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.HP){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("HP") && ordi.nom.includes(filter));
      }


      else if(typePrix == Prix.ALL && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.marque.includes("MSI") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF400 && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("MSI") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.INF1000 && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("MSI") && ordi.nom.includes(filter));
      }
      else if(typePrix == Prix.SUP1000 && typeMarque==Marques.MSI){
        return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("MSI") && ordi.nom.includes(filter));
      }
    }
  }

}
