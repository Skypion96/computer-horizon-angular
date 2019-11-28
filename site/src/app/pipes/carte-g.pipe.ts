import {Pipe, PipeTransform} from '@angular/core';
import {CarteGList} from '../interfaces/carte-ginterface';
import {Prix} from '../enums/prix.enum';

@Pipe({
  name: 'carteG'
})
export class CarteGPipe implements PipeTransform {

  transform(carteList:CarteGList,typePrix:Prix=Prix.ALL): any {
    if(typePrix==Prix.ALL){
      return carteList;
    }
    else if(typePrix==Prix.INF400){
      return carteList.filter(cg=>cg.prix <=400.00);
    }
    else if(typePrix==Prix.INF1000){
      return carteList.filter(cg=>cg.prix >400.00 && cg.prix <=1000.00);
    }
    else if(typePrix==Prix.SUP1000){
      return carteList.filter(cg=>cg.prix >1000.00);
    }
  }

}
