import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CartService} from '/home/david/baldonic-tienda/src/app/services/cart.service';
import {ItemCart} from '/home/david/baldonic-tienda/src/app/models/itemCart.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cartItems: Observable<ItemCart[]>

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cartService.showCart();
  }

}
