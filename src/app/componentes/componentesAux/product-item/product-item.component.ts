import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Producto} from '../../../models/producto.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() Producto: Producto= {
    sku: "",
    name: "",
    price: 0,
    description: "",
    img: "",
  };

  constructor(private _sanitizer: DomSanitizer) { }
  imagePath;
  ngOnInit(): void {
    
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
    + this.Producto.img);
  }

}
