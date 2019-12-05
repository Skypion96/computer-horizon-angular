import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PanierCarteGraphiqueDto} from '../interfaces/panier-carte-graphique-dto';
import {Observable} from 'rxjs';
import {PanierOList, PanierOrdinateurDto} from '../interfaces/panier-ordinateur-dto';
import {DisqueDList} from '../interfaces/disque-dDTO';
import {OrdiList} from '../interfaces/ordiDTO';

@Injectable({
  providedIn: 'root'
})
export class PanierOrdinateurService {

  private static URAL_API: string = '/PanierOrdinateur';
  constructor(public http:HttpClient) { }

  queryBase():Observable<PanierOList>{
    return this.http.get<PanierOList>(PanierOrdinateurService.URAL_API);
  }

  post(ordis: PanierOrdinateurDto): Observable<PanierOrdinateurDto> {
    return this.http.post<PanierOrdinateurDto>(PanierOrdinateurService.URAL_API, ordis);
  }

  delete(nom:string): Observable<any>{
    return this.http.delete(PanierOrdinateurService.URAL_API + "/" + nom);
  }
}
