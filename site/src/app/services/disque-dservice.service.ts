import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteGDTO} from "../interfaces/carte-gDTO";
import {ProcList} from "../interfaces/procDTO";
import {DisqueDDTO, DisqueDList} from "../interfaces/disque-dDTO";

@Injectable({
  providedIn: 'root'
})
export class DisqueDServiceService {

  private static URAL_API: string = '/DisqueDur';

  constructor(public http:HttpClient) { }

  queryBase():Observable<DisqueDList>{
    return this.http.get<DisqueDList>(DisqueDServiceService.URAL_API);
  }

  post(disqueD: DisqueDDTO): Observable<DisqueDDTO> {
    return this.http.post<DisqueDDTO>(DisqueDServiceService.URAL_API, disqueD);
  }

  update(disqueD:DisqueDDTO): Observable<any>{
    return this.http.put(DisqueDServiceService.URAL_API,disqueD);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(DisqueDServiceService.URAL_API + "/" + nom);
  }
}
