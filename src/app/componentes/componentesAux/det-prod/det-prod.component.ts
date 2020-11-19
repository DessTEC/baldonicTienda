import { Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Producto} from '../../../models/producto.model';
import { ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {LogIn} from '../../../services/logIn.service';
import { FormGroup, FormBuilder,Validators, NgControl, FormControl} from '@angular/forms';
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
    id_product: "",
    id_order: 0,
    design:1,
    size:0,
    image:""
  };
  
  carritoForm: FormGroup;
  vis=false;

  selectedColor: string="";
  selectedSize: string="";

  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private authService:LogIn, private router: Router, private cartService: CartService) { }
  imagePath;
  fileToUpload: File = null;

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
    console.log(this.Producto.img);
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image;base64,' 
      + this.Producto.img);
    this.carrito.id_product=this.Producto.sku;

      this.carritoForm=this.formBuilder.group({
        'quantity':[this.carrito.quantity],
        'design':[this.carrito.design],
        'size':[this.carrito.size],
        'image':[this.carrito.image],
      });
  }

  checkUser(){
    if (this.authService.verifyToken()==true) {
      this.cartService.addProductToCart(this.carrito.quantity,this.Producto.sku,this.carrito.id_order,this.carrito.design,this.carrito.size, this.carrito.image).subscribe((respuesta)=>{
        console.log(respuesta.data);
        alert("Producto agregado!");
        this.router.navigate(['/shop']);
      },
      (error)=>{
        console.log("MI ",error);
      });
    }else{
      localStorage.setItem("product",JSON.stringify(this.Producto));
      this.router.navigate(['/register']); 
    }  
  }

  changeVis(){
    this.vis=!this.vis;
  }

  sizeS(){
    this.carrito.size = 10;
    this.selectedSize='S';
  }
  sizeM(){
    this.carrito.size = 15;
    this.selectedSize='M';
  }
  sizeL(){
    this.carrito.size = 20;
    this.selectedSize='L';
  }
  sizeXL  (){
    this.carrito.size = 25;
    this.selectedSize='XL';
  }

  color1(){
    this.carrito.design = 1;
    this.selectedColor='MORADO';
  }
  color2(){
    this.carrito.design = 2;
    this.selectedColor='AMARILLO';
  }
  color3(){
    this.carrito.design = 3;
    this.selectedColor='ROJO';
  }
  color4(){
    this.carrito.design = 4;
    this.selectedColor='VERDE CLARO';
  }
  color5(){
    this.carrito.design = 5;
    this.selectedColor='VERDE OSCURO';
  }

  show(){
      console.log(this.carrito);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadDocument()
  }

  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.sendPSV(fileReader.result.toString())
    }
    fileReader.readAsDataURL(this.fileToUpload);
  }

  sendPSV(psv: any) {
    let info = {
      title: "1920x1080.jpg",
      img: psv
    }
  }

}
