import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { BehaviorSubject  } from 'rxjs';
import {signIn} from '../operations/query';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LogIn {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private apollo:Apollo, private router:Router) { }

  get isLoggedIn(){
    if (this.verifyToken()) {
      this.changeState(true)
    }
    return this.loggedIn.asObservable();
  }
  
  public signIn(email:string,password:string){
      let user={
        email,
        password
      }
      return this.apollo.watchQuery({
        query: signIn,
        variables: {
          user
        },
        fetchPolicy: "network-only"
      }).valueChanges.pipe(
        map((result: any) => {
          return result.data.logIn;
        })
      )
  }

  login(){
    this.loggedIn.next(true);
    if(localStorage.getItem('product') != null){
      this.router.navigate(['/det-prod']);
    }else{
      this.router.navigate(['/shop']);
    }  
  }

  changeState(state:boolean){
    this.loggedIn.next(state);
  }

  logOut(){
    this.loggedIn.next(false);
    localStorage.removeItem("token");
    this.router.navigate(['/register, Producto.sku, Producto.name, Producto.price, Producto.description, Producto.img']);
  }

  verifyToken() {
    let token = localStorage.getItem("token");
    console.log(token)
    if (token === null || token === "") {
      return false;
    }else {
      try {
        const { exp } = jwt_decode(token);
        if (Date.now() >= exp * 1000) {
          console.log("exp")
          return false;
        }
      } catch (err) {
        console.log(err)
        return false;
      }
    }
    return true;
  }



}
