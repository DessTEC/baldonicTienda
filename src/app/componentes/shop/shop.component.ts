import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ShopService} from '/home/david/baldonic-tienda/src/app/services/shop.service';
import {Producto} from '/home/david/baldonic-tienda/src/app/models/producto.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  productos: Observable<Producto[]>
  constructor(private tiendaService:ShopService) { }

  ngOnInit(): void {
    this.productos=this.tiendaService.getAllProducts();
    console.log(this.productos);
  }
}
