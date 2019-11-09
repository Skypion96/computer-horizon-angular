import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProcInterface, ProcList} from "../interfaces/proc-interface";

@Injectable({
  providedIn: 'root'
})
export class ProcServiceService {

  private static URAL_API: string = '/Processeur';

  constructor(public http:HttpClient) { }

  query():Observable<ProcList>{
    return this.http.get<ProcList>(ProcServiceService.URAL_API);
  }

  post(proc: ProcInterface): Observable<ProcInterface> {
    return this.http.post<ProcInterface>(ProcServiceService.URAL_API, proc);
  }

  update(proc:ProcInterface): Observable<any>{
    return this.http.put(ProcServiceService.URAL_API,proc);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(ProcServiceService.URAL_API + "/" + nom);
  }
}
