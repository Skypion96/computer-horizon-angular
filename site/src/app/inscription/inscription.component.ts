import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../services/create-user.service';
import {User, UserList} from '../interfaces/user';
import {Subscription} from 'rxjs';
import {UtilisateurService} from '../services/utilisateur.service';
import {log} from 'util';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  private nomUtilisateur:string;

  form: FormGroup = this.fb.group({
    name : this.fb.control('', Validators.required),
    firstName : this.fb.control('', Validators.required),
    mail : this.fb.control('', Validators.required),
    mdp : this.fb.control('', Validators.required),
    mdpC : this.fb.control('', Validators.required),
    tel : this.fb.control('', Validators.required),
    rue : this.fb.control('', Validators.required),
    num : this.fb.control('', Validators.required),
    cp : this.fb.control('', Validators.required),
    ville : this.fb.control('', Validators.required)
  });

  constructor(public fb: FormBuilder, public streamUserCreated: CreateUserService, public userService:UtilisateurService) { }

  ngOnInit() {
    this.listenStreamUserCreated();
  }

  createUser($event: any) {
    this.streamUserCreated.notify(this.buildUser());
    this.form.reset();
  }

  private listenStreamUserCreated():void{
    const sub : Subscription = this.streamUserCreated.$userCreated.subscribe(users=>this.createdUser(users));
  }

  private buildUser():User {
    return {
      nomUtilisateur: this.form.get("name").value,
      prenomUtilisateur: this.form.get("firstName").value,
      mail: this.form.get("mail").value,
      mdp: this.form.get("mdp").value,
      tel: this.form.get("tel").value,
      rue:this.form.get("rue").value,
      numRue:this.form.get("num").value,
      cp:this.form.get("cp").value,
      ville:this.form.get("ville").value,
      token:"zeisudfbqdyfpnvioqleug"
    };
  }

  private createdUser(user:User){
    const sub = this.userService.post(user).subscribe(user => console.log());
  }

}

