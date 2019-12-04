import { Component, OnInit } from '@angular/core';
import {UserDto} from '../interfaces/user-dto';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../services/authentification.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  graphic_card:any = "assets/pc-ordinateur-processeur";
  hard_drive:any = "assets/disque_durpdt.jpg";
  laptop:any = "assets/home-featured-cat-pc.png";
  processor:any = "assets/pc-ordinateur-processeur.jpg";
  newHorizon:any = "assets/id template.jpg";
  desc1:any = "assets/home1.jpg";
  desc2:any = "assets/home2.jpg";
  desc3:any = "assets/home3.jpg";

  currentUser: UserDto;
  users = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(mail: string) {
    this.userService.delete(mail)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService.queryBase()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

}
