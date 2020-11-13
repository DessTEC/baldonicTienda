import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {updateUserName} from '../operations/mutation';
import {updateUserPassword} from '../operations/mutation';
import {addAddress} from '../operations/mutation';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apollo:Apollo) { }

  public updateUserName(new_name: string){
    return this.apollo.mutate({
      mutation: updateUserName,
      context:{
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("token")
        })
      },
      variables: {
        new_name
      }
    });
  }

  updateUserPassword(old_password: string, new_password: string){
    let password={
      old_password,
      new_password
    }
    return this.apollo.mutate({
      mutation: updateUserPassword,
      context:{
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("token")
        })
      },
      variables: {
        password
      }
    });
  }


  public addAddress(street: string, city: string, state: string, zip_code: string, country: string, phone_number: number, instructions: string){
    let address={
      street,
      city,
      state,
      zip_code,
      country,
      phone_number,
      instructions
    }
    return this.apollo.mutate({
      mutation: addAddress,
      variables: {
        address
      }
    });
  }
}
