import { Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Producto} from '../../../models/producto.model';
import { ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-det-prod',
  templateUrl: './det-prod.component.html',
  styleUrls: ['./det-prod.component.css']
})
export class DetProdComponent implements OnInit {
  Producto: Producto= {
    sku: "",
    name: "",
    price: 0,
    description: "",
    img: "",
  };

  selectedColor: string
  
  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer) { }
  imagePath;

  ngOnInit(): void {
    this.Producto.sku= this.route.snapshot.params.sku;
    this.Producto.name= this.route.snapshot.params.name;
    this.Producto.price= this.route.snapshot.params.price;
    this.Producto.description= this.route.snapshot.params.description;
    this.Producto.img= this.route.snapshot.params.img;

    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
    + this.Producto.img);
  }

}
