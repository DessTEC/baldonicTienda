import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import {showCart} from '../operations/query';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apollo:Apollo) { }

  public showCart(){
    return this.apollo.watchQuery({
      query: showCart,
      fetchPolicy: "network-only",
      context:{
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("token")
        })
      }
    }).valueChanges.pipe(
      map((result: any) => {
        return result.data.showCart;
      })
    )
  }

}
