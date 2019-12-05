import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteGDTO, CarteGList} from '../interfaces/carte-gDTO';

@Injectable({
  providedIn: 'root'
})
export class CarteGServiceService {

  private static URAL_API: string = '/CarteGraphique';

  constructor(public http:HttpClient) { }

  queryBase():Observable<CarteGList>{
    return this.http.get<CarteGList>(CarteGServiceService.URAL_API);
  }

  post(carteG: CarteGDTO): Observable<CarteGDTO> {
    return this.http.post<CarteGDTO>(CarteGServiceService.URAL_API, carteG);
  }

  update(carteG:CarteGDTO): Observable<any>{
    return this.http.put(CarteGServiceService.URAL_API,carteG);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(CarteGServiceService.URAL_API + "/" + nom);
  }
}
