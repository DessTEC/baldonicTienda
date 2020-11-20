import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CartService} from '../../services/cart.service';
import {ItemCart} from '../../models/itemCart.model';
import {DirecModel} from '../../models/direc.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cartItems: Observable<ItemCart[]>
  direcPrinc: Observable<DirecModel[]>

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.showCart();
    this.direcPrinc=this.cartService.getPrincUserAddress();
    console.log(this.direcPrinc);
  }

}
