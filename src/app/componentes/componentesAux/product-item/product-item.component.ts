import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() name:string;
  @Input() price:number;
  @Input() description:string;
  @Input() img:string;
  constructor(private _sanitizer: DomSanitizer) { }
  imagePath;
  ngOnInit(): void {
    
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
    + this.img);
  }

}
