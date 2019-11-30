import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DisqueDDTO, DisqueDList} from "../interfaces/disque-dDTO";
import {OrdiDTO, OrdiList} from "../interfaces/ordiDTO";

@Injectable({
  providedIn: 'root'
})
export class OrdiServiceService {

  private static URAL_API: string = '/Ordinateur';

  constructor(public http:HttpClient) { }

  queryBase():Observable<OrdiList>{
    return this.http.get<OrdiList>(OrdiServiceService.URAL_API);
  }

  post(ordi: OrdiDTO): Observable<OrdiDTO> {
    return this.http.post<OrdiDTO>(OrdiServiceService.URAL_API, ordi);
  }

  update(ordi:OrdiDTO): Observable<any>{
    return this.http.put(OrdiServiceService.URAL_API,ordi);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(OrdiServiceService.URAL_API + "/" + nom);
  }
}
