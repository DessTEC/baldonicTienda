import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {contactData} from '../operations/mutation';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apollo:Apollo) { }

  contactMail(name:string,email:string,message:string){
    let contact={
      name,
      email,
      message
    }
    return this.apollo.mutate({
      mutation: contactData,
      variables: {
        contact
      }
    });
  }
}
