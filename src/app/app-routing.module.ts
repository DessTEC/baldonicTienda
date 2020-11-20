import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AboutUsComponent } from './componentes/about-us/about-us.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ShopComponent } from './componentes/shop/shop.component';
import {CarritoComponent} from './componentes/carrito/carrito.component';
import {AuthGuard} from './guardian/auth.guard';
import {TestImageComponent} from './test-image/test-image.component';
import {DirecUsComponent} from './componentes/componentesAux/direc-us/direc-us.component';
import {MisDirecComponent} from './componentes/componentesAux/mis-direc/mis-direc.component';
import {CuentaComponent} from './componentes/cuenta/cuenta.component';
import { DetProdComponent } from './componentes/componentesAux/det-prod/det-prod.component';
import { CambiarDirComponent } from './componentes/componentesAux/cambiar-dir/cambiar-dir.component'; 

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
  {path:'det-prod/:sku/:name/:price/:description/:img', component:DetProdComponent},
  {path:'det-prod', component:DetProdComponent},
  {path:'cuenta', component:CuentaComponent},
  {path:'cambiar-dir', component:CambiarDirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
