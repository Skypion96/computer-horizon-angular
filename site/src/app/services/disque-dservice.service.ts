import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarteGInterface} from "../interfaces/carte-ginterface";
import {ProcList} from "../interfaces/proc-interface";
import {DisqueDInterface, DisqueDList} from "../interfaces/disque-dinterface";

@Injectable({
  providedIn: 'root'
})
export class DisqueDServiceService {

  private static URAL_API: string = '/DisqueDur';

  constructor(public http:HttpClient) { }

  query():Observable<DisqueDInterface>{
    return this.http.get<DisqueDList>(DisqueDServiceService.URAL_API);
  }

  post(disqueD: DisqueDInterface): Observable<DisqueDInterface> {
    return this.http.post<DisqueDInterface>(DisqueDServiceService.URAL_API, disqueD);
  }

  update(disqueD:DisqueDInterface): Observable<any>{
    return this.http.put(DisqueDServiceService.URAL_API,disqueD);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(DisqueDServiceService.URAL_API + "/" + nom);
  }
}
