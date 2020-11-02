import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ShopService} from '../../services/shop.service';
import {Producto} from '../../models/producto.model';

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
