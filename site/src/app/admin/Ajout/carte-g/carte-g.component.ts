import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateProcService} from '../../../services/create-proc.service';
import {ProcServiceService} from '../../../services/proc-service.service';
import {Subscription} from 'rxjs';
import {ProcDTO} from '../../../interfaces/procDTO';
import {CarteGDTO} from '../../../interfaces/carte-gDTO';
import {CarteGServiceService} from '../../../services/carte-gservice.service';
import {CreateCarteGService} from '../../../services/create-carte-g.service';
import {CreateDisqueDService} from '../../../services/create-disque-d.service';
import {DisqueDServiceService} from '../../../services/disque-dservice.service';
import {DisqueDDTO} from '../../../interfaces/disque-dDTO';
import {CreateOrdiService} from '../../../services/create-ordi.service';
import {OrdiServiceService} from '../../../services/ordi-service.service';
import {OrdiDTO} from '../../../interfaces/ordiDTO';

@Component({
  selector: 'app-carte-g',
  templateUrl: './carte-g.component.html',
  styleUrls: ['./carte-g.component.css']
})
export class CarteGComponent implements OnInit {

  formOrdi: FormGroup = this.fbOrdi.group({
    nom : this.fbOrdi.control('', Validators.required),
    marque : this.fbOrdi.control('', Validators.required),
    prix : this.fbOrdi.control('', Validators.required),
    frequence : this.fbOrdi.control('', Validators.required),
    memoireVideo : this.fbOrdi.control('', Validators.required),
    qte : this.fbOrdi.control('', Validators.required),
    img : this.fbOrdi.control('', Validators.required),
  });

  constructor(public fbOrdi: FormBuilder, public streamOrdiCreated: CreateOrdiService,public ordiService:OrdiServiceService) { }

  ngOnInit() {
    this.listenStreamOrdiCreated();
  }

  createOrdi($event: any) {
    this.streamOrdiCreated.notify(this.buildOrdi());
    this.formOrdi.reset();
  }

  private listenStreamOrdiCreated():void{
    const sub : Subscription = this.streamOrdiCreated.$ordiCreated.subscribe(users=>this.createdOrdi(users));
  }

  private buildOrdi():OrdiDTO {
    return {
      nom:this.formOrdi.get("nom").value,
      marque:this.formOrdi.get("marque").value,
      capacite:this.formOrdi.get("prix").value,
      ssd:this.formOrdi.get("frequence").value,
      prix:this.formOrdi.get("prix").value,
      interne:this.formOrdi.get("frequence").value,
      qte:this.formOrdi.get("qte").value,
      img:this.formOrdi.get("img").value,
      prixReduc:0.00,
    };
  }

  private createdOrdi(ordi:OrdiDTO){
    const sub = this.ordiService.post(ordi).subscribe(proc => console.log());
  }

}
