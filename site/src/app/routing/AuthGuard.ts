import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentification.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  readonly LOGIN:string ="Login";
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // authorised so return true
      return true;
    }

    this.router.navigate(['/'+this.LOGIN], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
