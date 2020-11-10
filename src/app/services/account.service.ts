import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {updateUserName} from '../operations/mutation';
import {updateUserPassword} from '../operations/mutation';
import {addAddress} from '../operations/mutation';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apollo:Apollo) { }

  public updateUserName(new_name: string){
    return this.apollo.mutate({
      mutation: updateUserName,
      variables: {
        new_name
      }
    });
  }

  public updateUserPassword(old_password: string, new_password: string){
    let passwordPair={
      old_password,
      new_password
    }
    return this.apollo.mutate({
      mutation: updateUserPassword,
      variables: {
        passwordPair
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
