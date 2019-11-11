import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProcInterface, ProcList} from "../interfaces/proc-interface";
import {CarteGInterface} from "../interfaces/carte-ginterface";

@Injectable({
  providedIn: 'root'
})
export class CarteGServiceService {

  private static URAL_API: string = '/CarteGraphique';

  constructor(public http:HttpClient) { }

  queryBase():Observable<CarteGInterface>{
    return this.http.get<ProcList>(CarteGServiceService.URAL_API);
  }

  post(carteG: CarteGInterface): Observable<CarteGInterface> {
    return this.http.post<CarteGInterface>(CarteGServiceService.URAL_API, carteG);
  }

  update(carteG:CarteGInterface): Observable<any>{
    return this.http.put(CarteGServiceService.URAL_API,carteG);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(CarteGServiceService.URAL_API + "/" + nom);
  }
}
