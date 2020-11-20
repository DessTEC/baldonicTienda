import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {
  @Input() name:string;
  @Input() quantity: number;
  @Input() size: number;
  @Input() design: string;
  @Input() price:number;
  @Input() image:string;
  
  constructor(private _sanitizer: DomSanitizer) { }
  imagePath
  ngOnInit(): void {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
    + this.image);
  }
  sizeS(size:number){
    if (size = 1){
      this.name = "S";
    }
    else if(size = 2){
      this.name = "M";
    }
    else if(size = 3){
      this.name = "L";
    }
    else if(size = 4){
      this.name = "XL";
    }
  }

}
