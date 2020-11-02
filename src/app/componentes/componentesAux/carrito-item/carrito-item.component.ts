import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {
  @Input() name:string;
  @Input() price:number;
  @Input() description:string;
  @Input() image:string;
  
  constructor(private _sanitizer: DomSanitizer) { }
  imagePath
  ngOnInit(): void {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
    + this.image);
  }

}
