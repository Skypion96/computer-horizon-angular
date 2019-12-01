import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PanierDisqueDurDto} from '../interfaces/panier-disque-dur-dto';
import {Observable} from 'rxjs';
import {PanierCarteGraphiqueDto} from '../interfaces/panier-carte-graphique-dto';

@Injectable({
  providedIn: 'root'
})
export class PanierCarteGraphiqueService {

  private static URAL_API: string = '/PanierCarteGraphique';
  constructor(public http:HttpClient) { }


  post(cartesGs: PanierCarteGraphiqueDto): Observable<PanierCarteGraphiqueDto> {
    return this.http.post<PanierCarteGraphiqueDto>(PanierCarteGraphiqueService.URAL_API, cartesGs);
  }
}
