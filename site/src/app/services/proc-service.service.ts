import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProcDTO, ProcList} from "../interfaces/procDTO";

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

  query(nom:string):Observable<ProcDTO>{
    return this.http.get<ProcDTO>(ProcServiceService.URAL_API +"/"+"Processeur?nom="+ nom);
  }
  post(proc: ProcDTO): Observable<ProcDTO> {
    return this.http.post<ProcDTO>(ProcServiceService.URAL_API, proc);
  }

  update(proc:ProcDTO): Observable<any>{
    return this.http.put(ProcServiceService.URAL_API,proc);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(ProcServiceService.URAL_API + "/" + nom);
  }
}
