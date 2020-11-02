import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '/home/david/baldonic-tienda/src/app/componentes/home/home.component';
import { RegisterComponent } from '/home/david/baldonic-tienda/src/app/componentes/register/register.component';
import { AboutUsComponent } from '/home/david/baldonic-tienda/src/app/componentes/about-us/about-us.component';
import { ContactComponent } from '/home/david/baldonic-tienda/src/app/componentes/contact/contact.component';
import { ShopComponent } from '/home/david/baldonic-tienda/src/app/componentes/shop/shop.component';
import {CarritoComponent} from '/home/david/baldonic-tienda/src/app/componentes/carrito/carrito.component';
import {AuthGuard} from '/home/david/baldonic-tienda/src/app/guardian/auth.guard';
import {TestImageComponent} from './test-image/test-image.component';
import {DirecUsComponent} from '/home/david/baldonic-tienda/src/app/componentes/componentesAux/direc-us/direc-us.component';
import {MisDirecComponent} from '/home/david/baldonic-tienda/src/app/componentes/componentesAux/mis-direc/mis-direc.component';
import {CuentaComponent} from '/home/david/baldonic-tienda/src/app/componentes/cuenta/cuenta.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact', component:ContactComponent},
  {path:'shop', component: ShopComponent},
  {path:'carrito', component: CarritoComponent, canActivate: [AuthGuard]},
  {path:'test-imagen', component: TestImageComponent},
  {path:'direccionN', component:DirecUsComponent},
  {path:'mis-direc', component:MisDirecComponent},
  {path:'cuenta', component:CuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
