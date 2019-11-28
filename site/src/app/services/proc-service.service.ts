import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProcInterface, ProcList} from "../interfaces/proc-interface";

@Injectable({
  providedIn: 'root'
})
export class ProcServiceService {

  private static URAL_API: string = '/Processeur';
  private nom: string;

  constructor(public http:HttpClient) { }

  queryBase():Observable<ProcList>{
    return this.http.get<ProcList>(ProcServiceService.URAL_API);
  }

  query(nom:string):Observable<ProcInterface>{
    return this.http.get<ProcInterface>(ProcServiceService.URAL_API +"/"+"Processeur?nom="+ nom);
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
