import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentification.service';
import {RoutingModule} from '../routing/routing.module';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormAdmin: FormGroup
  loading = false;
  submitted = false;
  returnUrl: string;
  returnUrlA: string;
  error = '';
  readonly INSCRIPTION:string="inscription";
  readonly ACCUEIL:string ="Accueil";
  readonly ADMIN:string="Admin";

  constructor(
    private formBuilder: FormBuilder,
    private formBuilderAdmin: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    if (this.authenticationService.currentAdminValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required],
      mdp: ['', Validators.required]
    },
    this.loginFormAdmin = this.formBuilderAdmin.group({
      mail: ['', Validators.required],
      mdp: ['', Validators.required]
    }));

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrlA = this.route.snapshot.queryParams['returnUrlA'] || '/'+this.ADMIN;
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get fA() { return this.loginFormAdmin.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.mail.value, this.f.mdp.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  onSubmitAdmin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginFormAdmin.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.loginAdmin(this.fA.mail.value, this.fA.mdp.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrlA]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
