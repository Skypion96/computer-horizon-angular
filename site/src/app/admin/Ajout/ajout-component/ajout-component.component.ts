import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../../../services/create-user.service';
import {Subscription} from 'rxjs';
import {ProcDTO} from '../../../interfaces/procDTO';
import {CreateProcService} from '../../../services/create-proc.service';
import {ProcServiceService} from '../../../services/proc-service.service';

@Component({
  selector: 'app-ajout-component',
  templateUrl: './ajout-component.component.html',
  styleUrls: ['./ajout-component.component.css']
})
export class AjoutComponentComponent implements OnInit {

  private procService:ProcServiceService;

  form: FormGroup = this.fb.group({
    nom : this.fb.control('', Validators.required),
    marque : this.fb.control('', Validators.required),
    nbCoeurs : this.fb.control('', Validators.required),
    frequence : this.fb.control('', Validators.required),
    prix : this.fb.control('', Validators.required),
    qte : this.fb.control('', Validators.required),
    img : this.fb.control('', Validators.required),
  });

  constructor(public fb: FormBuilder, public streamUserCreated: CreateProcService) { }

  ngOnInit() {
    this.listenStreamProcCreated();
  }

  createProc($event: any) {
    this.streamUserCreated.notify(this.buildUser());
    this.form.reset();
  }

  private listenStreamProcCreated():void{
    const sub : Subscription = this.streamUserCreated.$procCreated.subscribe(users=>this.createdUser(users));
  }

  private buildUser():ProcDTO {
    return {
      nom:this.form.get("nom").value,
      marque:this.form.get("marque").value,
      nbCoeurs:this.form.get("nbCoeurs").value,
      frequence:this.form.get("frequence").value,
      prix:this.form.get("prix").value,
      qte:this.form.get("qte").value,
      img:this.form.get("img").value,
      reduction:0,
      cote:0,
      dateCote:" ",
      prixReduc:0.0,
    };
  }

  private createdUser(proc:ProcDTO){
      const sub = this.procService.post(proc).subscribe(proc => console.log());
  }
}
