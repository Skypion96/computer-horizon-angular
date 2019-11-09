import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DisqueDInterface, DisqueDList} from "../interfaces/disque-dinterface";
import {OrdiInterface, OrdiList} from "../interfaces/ordi-interface";

@Injectable({
  providedIn: 'root'
})
export class OrdiServiceService {

  private static URAL_API: string = '/Ordinateur';

  constructor(public http:HttpClient) { }

  query():Observable<OrdiInterface>{
    return this.http.get<OrdiList>(OrdiServiceService.URAL_API);
  }

  post(ordi: OrdiInterface): Observable<OrdiInterface> {
    return this.http.post<OrdiInterface>(OrdiServiceService.URAL_API, ordi);
  }

  update(ordi:OrdiInterface): Observable<any>{
    return this.http.put(OrdiServiceService.URAL_API,ordi);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(OrdiServiceService.URAL_API + "/" + nom);
  }
}
