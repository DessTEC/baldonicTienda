import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';


import {registerData} from '../operations/mutation';

@Injectable({
  providedIn: 'root'
})
export class SignUp {

  constructor(private apollo:Apollo) { }

  signUp(name:string,email:string,password:string){
    let user={
      name,
      email,
      password
    }
    return this.apollo.mutate({
      mutation: registerData,
      variables: {
        user
      }
    });
  }
}
