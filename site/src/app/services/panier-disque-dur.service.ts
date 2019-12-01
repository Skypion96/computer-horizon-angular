import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PanierProcDTO} from '../interfaces/panier-proc-dto';
import {Observable} from 'rxjs';
import {PanierDisqueDurDto} from '../interfaces/panier-disque-dur-dto';

@Injectable({
  providedIn: 'root'
})
export class PanierDisqueDurService {

  private static URAL_API: string = '/PanierDisqueDur';
  constructor(public http:HttpClient) { }


  post(disqueDs: PanierDisqueDurDto): Observable<PanierDisqueDurDto> {
    return this.http.post<PanierDisqueDurDto>(PanierDisqueDurService.URAL_API, disqueDs);
  }
}
