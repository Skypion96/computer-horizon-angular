import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../services/create-user.service';
import {UserDto, UserList} from '../interfaces/user-dto';
import {Subscription} from 'rxjs';
import {log} from 'util';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentification.service';
import {UserService} from '../services/user.service';
import {RoutingModule} from '../routing/routing.module';
import {RouterModule} from '@angular/router';
import {PanierDTO} from '../interfaces/panier-dto';
import {CreatePanierService} from '../services/create-panier.service';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  registerForm: FormGroup;
  readonly ACCUEIL:string ="Accueil";
  readonly LOGIN:string ="Login";

  private nomUtilisateur:string;
  //private

  form: FormGroup = this.fb.group({
    nom : this.fb.control('', Validators.required),
    prenom : this.fb.control('', Validators.required),
    mail : this.fb.control('', Validators.required),
    mdp : this.fb.control('', Validators.required),
    mdpC : this.fb.control('', Validators.required),
    tel : this.fb.control('', Validators.required),
    rue : this.fb.control('', Validators.required),
    num : this.fb.control('', Validators.required),
    cp : this.fb.control('', Validators.required),
    ville : this.fb.control('', Validators.required)
  });


  constructor(public fb: FormBuilder, public streamUserCreated: CreateUserService, public userService: UserService,
              public streamPanierCreated: CreatePanierService, public panierService:PanierService) { }

  ngOnInit() {
    this.listenStreamUserCreated();
    this.listenStreamPanierCreated();
  }

  createUser($event: any) {
    this.streamUserCreated.notify(this.buildUser());
    this.streamPanierCreated.notify(this.buildPanier());
    this.form.reset();
  }

  private listenStreamUserCreated():void{
    const sub : Subscription = this.streamUserCreated.$userCreated.subscribe(users=>this.createdUser(users));
  }

  private buildUser():UserDto {
    return {
      nomUtilisateur: this.form.get("nom").value,
      prenomUtilisateur: this.form.get("prenom").value,
      mail: this.form.get("mail").value,
      mdp: this.form.get("mdp").value,
      tel: this.form.get("tel").value,
      rue:this.form.get("rue").value,
      numRue:this.form.get("num").value,
      cp:this.form.get("cp").value,
      ville:this.form.get("ville").value,
    };
  }

  private createdUser(user:UserDto){
    const sub = this.userService.post(user).subscribe(user => console.log());
    //const sub = this.userService.post(user).subscribe(user => console.log());
  }

  private buildPanier():PanierDTO{
    return{
      mail:this.form.get("mail").value
    }
  }


  private listenStreamPanierCreated():void{
    const sub : Subscription = this.streamPanierCreated.$panierCreated.subscribe(panier=>this.createdPanier(panier));
  }

  private createdPanier(panier:PanierDTO){
    const sub = this.panierService.post(panier).subscribe(panier => console.log());
    //const sub = this.userService.post(user).subscribe(user => console.log());
  }

}

