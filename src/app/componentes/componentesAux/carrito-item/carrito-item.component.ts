import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {CartService} from '../../../services/cart.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {
  @Input() name:string;
  @Input() id_item:number;
  @Input() quantity: number;
  @Input() size: number;
  @Input() design: string;
  @Input() price:number;
  @Input() image:string;
  
  sizeInText: string;

  constructor(private _sanitizer: DomSanitizer, private cartService: CartService, private router: Router) { }
  imagePath
  ngOnInit(): void {
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
    + this.image);

    if (this.size = 1){
      this.sizeInText = "S";
    }
    else if(this.size = 2){
      this.sizeInText = "M";
    }
    else if(this.size = 3){
      this.sizeInText = "L";
    }
    else if(this.size = 4){
      this.sizeInText = "XL";
    }
  }

  deleteItem(){
    this.cartService.deleteItem(this.id_item).subscribe((respuesta)=>{
      console.log(respuesta.data);
      this.router.navigate(['/shop']);
    },
    (error)=>{
      console.log("MI ",error);
    });
  }
}
