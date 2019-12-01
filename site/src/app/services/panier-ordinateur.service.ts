import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PanierCarteGraphiqueDto} from '../interfaces/panier-carte-graphique-dto';
import {Observable} from 'rxjs';
import {PanierOrdinateurDto} from '../interfaces/panier-ordinateur-dto';

@Injectable({
  providedIn: 'root'
})
export class PanierOrdinateurService {

  private static URAL_API: string = '/PanierOrdinateur';
  constructor(public http:HttpClient) { }


  post(ordis: PanierOrdinateurDto): Observable<PanierOrdinateurDto> {
    return this.http.post<PanierOrdinateurDto>(PanierOrdinateurService.URAL_API, ordis);
  }
}
