import {Pipe, PipeTransform} from '@angular/core';
import {Prix} from '../enums/prix.enum';
import {OrdiList} from '../interfaces/ordi-interface';
import {OrdiMarque} from '../enums/ordi-marque.enum';

@Pipe({
  name: 'ordinateur'
})
export class OrdinateurPipe implements PipeTransform {

  transform(ordiList: OrdiList, typePrix:Prix = Prix.ALL,typeMarque:OrdiMarque=OrdiMarque.ALL): any {
    if(typePrix == Prix.ALL && typeMarque==OrdiMarque.ALL){
      return ordiList;
    }
    else if(typePrix == Prix.INF400 && typeMarque==OrdiMarque.ALL){
      return ordiList.filter(ordi=>ordi.prix <= 400.00);
    }
    else if(typePrix == Prix.INF1000 && typeMarque==OrdiMarque.ALL){
      return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00);
    }
    else if(typePrix == Prix.SUP1000 && typeMarque==OrdiMarque.ALL){
      return ordiList.filter(ordi=>ordi.prix > 1000.00);
    }


    else if(typePrix == Prix.ALL && typeMarque==OrdiMarque.ACER){
      return ordiList.filter(ordi=>ordi.marque.includes("ACER"));
    }
    else if(typePrix == Prix.INF400 && typeMarque==OrdiMarque.ACER){
      return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("ACER"));
    }
    else if(typePrix == Prix.INF1000 && typeMarque==OrdiMarque.ACER){
      return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("ACER"));
    }
    else if(typePrix == Prix.SUP1000 && typeMarque==OrdiMarque.ACER){
      return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("ACER"));
    }


    else if(typePrix == Prix.ALL && typeMarque==OrdiMarque.ASUS){
      return ordiList.filter(ordi=>ordi.marque.includes("ASUS"));
    }
    else if(typePrix == Prix.INF400 && typeMarque==OrdiMarque.ASUS){
      return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("ASUS"));
    }
    else if(typePrix == Prix.INF1000 && typeMarque==OrdiMarque.ASUS){
      return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("ASUS"));
    }
    else if(typePrix == Prix.SUP1000 && typeMarque==OrdiMarque.ASUS){
      return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("ASUS"));
    }


    else if(typePrix == Prix.ALL && typeMarque==OrdiMarque.HP){
      return ordiList.filter(ordi=>ordi.marque.includes("HP"));
    }
    else if(typePrix == Prix.INF400 && typeMarque==OrdiMarque.HP){
      return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("HP"));
    }
    else if(typePrix == Prix.INF1000 && typeMarque==OrdiMarque.HP){
      return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("HP"));
    }
    else if(typePrix == Prix.SUP1000 && typeMarque==OrdiMarque.HP){
      return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("HP"));
    }


    else if(typePrix == Prix.ALL && typeMarque==OrdiMarque.MSI){
      return ordiList.filter(ordi=>ordi.marque.includes("MSI"));
    }
    else if(typePrix == Prix.INF400 && typeMarque==OrdiMarque.MSI){
      return ordiList.filter(ordi=>ordi.prix <= 400.00 && ordi.marque.includes("MSI"));
    }
    else if(typePrix == Prix.INF1000 && typeMarque==OrdiMarque.MSI){
      return ordiList.filter(ordi=>ordi.prix > 400.00 && ordi.prix <= 1000.00 && ordi.marque.includes("MSI"));
    }
    else if(typePrix == Prix.SUP1000 && typeMarque==OrdiMarque.MSI){
      return ordiList.filter(ordi=>ordi.prix > 1000.00 && ordi.marque.includes("MSI"));
    }
  }

}
