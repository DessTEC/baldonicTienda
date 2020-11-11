import { Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Producto} from '../../../models/producto.model';
import { ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {LogIn} from '../../../services/logIn.service';
import {CartProd} from '../../../models/cartProd.model'

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

  carrito: CartProd= {
    quantity:1,
    id_product:"",
    id_order:0,
    design:1,
    size:0,
    image:""
  };

  hide=true;

  selectedColor: string

  constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer, private authService:LogIn, private router: Router) { }
  imagePath;

  ngOnInit(): void {
    if(localStorage.getItem('product') != null){
      let product = JSON.parse( localStorage.getItem('product') );
      if(product.hasOwnProperty('direction')){
        this.Producto.sku= product.sku;
        this.Producto.name= product.name;
        this.Producto.price= product.price;
        this.Producto.description= product.description;
        this.Producto.img= product.img;
        localStorage.removeItem("product");
      }else{
        this.Producto.sku= this.route.snapshot.params.sku;
        this.Producto.name= this.route.snapshot.params.name;
        this.Producto.price= this.route.snapshot.params.price;
        this.Producto.description= this.route.snapshot.params.description;
        this.Producto.img= this.route.snapshot.params.img;
        localStorage.removeItem("product");
      }
    }else{
      this.Producto.sku= this.route.snapshot.params.sku;
      this.Producto.name= this.route.snapshot.params.name;
      this.Producto.price= this.route.snapshot.params.price;
      this.Producto.description= this.route.snapshot.params.description;
      this.Producto.img= this.route.snapshot.params.img;
    }
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
      + this.Producto.img);
  }

  checkUser(){
    if (this.authService.verifyToken()==true) {
      this.router.navigate(['/contact']); 
    }else{
      localStorage.setItem("product",JSON.stringify(this.Producto));
      this.router.navigate(['/register']); 
    }  
  }

  hideC(){
    this.hide = !this.hide
  }

  sizeS(){
    this.carrito.size = 10;
  }
  sizeM(){
    this.carrito.size = 15;
  }
  sizeL(){
    this.carrito.size = 20;
  }
  sizeXL  (){
    this.carrito.size = 25;
  }

  color1(){
    this.carrito.design = 1;
  }
  color2(){
    this.carrito.design = 2;
  }
  color3(){
    this.carrito.design = 3;
  }
  color4(){
    this.carrito.design = 4;
  }
  color5(){
    this.carrito.design = 5;
  }

  show(){
      console.log(this.carrito);
  }

  img(){
    this.carrito.image = "jiwji2i939392jeu2e2i";
  }

}
