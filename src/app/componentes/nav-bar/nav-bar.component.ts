import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {LogIn} from '../../services/logIn.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;      
  constructor(private authService:LogIn) {
   }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logOut(){
    this.authService.logOut();
  }

}
