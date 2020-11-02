import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {getAllProducts} from '../operations/query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private apollo:Apollo) { }

  public getAllProducts(){
    return this.apollo.watchQuery({
      query: getAllProducts,
      fetchPolicy: "network-only"
    }).valueChanges.pipe(
      map((result: any) => {
        return result.data.getAllProducts;
      })
    )
  }
}
