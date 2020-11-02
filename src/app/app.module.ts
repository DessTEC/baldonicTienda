import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { RegisterComponent } from './componentes/register/register.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { ProductItemComponent } from './componentes/componentesAux/product-item/product-item.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './componentes/shop/shop.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { TestImageComponent } from './test-image/test-image.component';
import { CarritoItemComponent } from './componentes/componentesAux/carrito-item/carrito-item.component';
import { DireccionComponent } from './componentes/componentesAux/direccion/direccion.component';
import { MisDirecComponent } from './componentes/componentesAux/mis-direc/mis-direc.component';
import { DirecUsComponent } from './componentes/componentesAux/direc-us/direc-us.component';
import { CuentaComponent } from './componentes/cuenta/cuenta.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    ProductItemComponent,
    AboutUsComponent,
    ContactComponent,
    ShopComponent,
    CarritoComponent,
    TestImageComponent,
    CarritoItemComponent,
    DireccionComponent,
    MisDirecComponent,
    DirecUsComponent,
    CuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    GraphQLModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
