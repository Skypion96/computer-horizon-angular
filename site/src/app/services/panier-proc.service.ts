import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PanierPList, PanierProcDTO} from '../interfaces/panier-proc-dto';
import {HttpClient} from '@angular/common/http';
import {ProcList} from '../interfaces/procDTO';


@Injectable({
  providedIn: 'root'
})
export class PanierProcService {

  private static URAL_API: string = '/PanierProcesseur';
  constructor(public http:HttpClient) { }


  queryBase():Observable<PanierPList>{
    return this.http.get<PanierPList>(PanierProcService.URAL_API);
  }

  post(procs: PanierProcDTO): Observable<PanierProcDTO> {
    return this.http.post<PanierProcDTO>(PanierProcService.URAL_API, procs);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(PanierProcService.URAL_API + "/" + nom);
  }


}
