import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import {showCart} from '../operations/query';
import {addProductToCart} from '../operations/mutation';
import {getProductInfo} from '../operations/query';
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

  public addProductToCart(quantity:number,id_product:string, id_order:number, design: number, size: number, image: string){
    let product={
      quantity,
      id_product,
      id_order,
      design,
      size,
      image
    }
    return this.apollo.mutate({
      mutation: addProductToCart,
      context:{
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("token")
        })
      },
      variables: {
        product
      }
    });
  }

  public getProductInfo(){
    return this.apollo.watchQuery({
      query: getProductInfo,
      fetchPolicy: "network-only",
    }).valueChanges.pipe(
      map((result: any) => {
        return result.data.getProductInfo;
      })
    )
  }

}
