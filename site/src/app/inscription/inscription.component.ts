import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateUserService} from '../services/create-user.service';
import {UserDto, UserList} from '../interfaces/user-dto';
import {Subscription} from 'rxjs';
import {log} from 'util';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentification.service';
import {UserService} from '../services/user.service';
import {AlertService} from '../services/alert.service';
import {RoutingModule} from '../routing/routing.module';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  registerForm: FormGroup;
  loading = false;
  submitted = false;
  readonly ACCUEIL:string ="Accueil";

  constructor(
    private formBuilder: FormBuilder,
    //private router: RoutingModule,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      //this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nomUtilisateur: ['', Validators.required],
      prenomUtilisateur: ['', Validators.required],
      mail: ['', Validators.required],
      mdp: ['', Validators.required],
      tel: ['', Validators.required],
      rue: ['', Validators.required],
      numRue: ['', Validators.required],
      cp: ['', Validators.required],
      ville: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          //this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }






  /*private nomUtilisateur:string;

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

  constructor(public fb: FormBuilder, public streamUserCreated: CreateUserService) { }

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

  private buildUser():UserDto {
    return {
      nomUtilisateur: this.form.get("name").value,
      prenomUtilisateur: this.form.get("firstName").value,
      mail: this.form.get("mail").value,
      mdp: this.form.get("mdp").value,
      tel: this.form.get("tel").value,
      rue:this.form.get("rue").value,
      numRue:this.form.get("num").value,
      cp:this.form.get("cp").value,
      ville:this.form.get("ville").value
    };
  }

  private createdUser(user:UserDto){
  //  const sub = this.userService.post(user).subscribe(user => console.log());
  }*/

}

