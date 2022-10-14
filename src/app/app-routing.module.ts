import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';


import { HomesComponent } from './PAGES/homes/homes.component';
//import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import{SidebarComponent}from './COMPONENTS/sidebar/sidebar.component';
import{PaymenttComponent} from './COMPONENTS/paymentt/paymentt.component';
import { SinupComponent } from './sinup/sinup.component';
import { LoginComponent } from './login/login.component';
import { TenissComponent } from './COMPONENTS/teniss/teniss.component';
import { BijouxsComponent } from './COMPONENTS/bijouxs/bijouxs.component';
import { FilmsComponent } from './COMPONENTS/films/films.component';
import { LivresComponent } from './COMPONENTS/livres/livres.component';
import { JeuxsComponent } from './COMPONENTS/jeuxs/jeuxs.component';
import { SmartphonesComponent } from './COMPONENTS/smartphones/smartphones.component';
import { MusicsComponent } from './COMPONENTS/musics/musics.component';
import { TessComponent } from './COMPONENTS/tess/tess.component';
import { PrincipalComponent } from './COMPONENTS/principal/principal.component';
import { PrincipalsComponent } from './COMPONENTS/principals/principals.component';
import { AsatananasComponent } from './COMPONENTS/asatananas/asatananas.component';
import { CostarsComponent } from './COMPONENTS/costars/costars.component';
import { MontresComponent } from './COMPONENTS/montres/montres.component';
import { AjouterComponent } from './ajouter/ajouter.component';








const routes: Routes=[
 {path:'homes',component:HomesComponent},
 {path:'',component:PrincipalsComponent},
 {path:'paymentt',component:PaymenttComponent},
  //{path:'login' , component:LoginComponent},
 /* {path:'checkout',component:CheckoutComponent},
  */
  {path:'teniss',component:TenissComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'login',component:LoginComponent},
  {path:'sinup',component:SinupComponent},
  {path:'bijouxs',component:BijouxsComponent},
 { path:'films',component:FilmsComponent},
  {path:'jeuxs',component:JeuxsComponent},
  {path:'livres',component:LivresComponent},
  { path:'musics',component:MusicsComponent},
  {path:'smartphones',component:SmartphonesComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'tess',component:TessComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'homesprincipals',component:HomesComponent},
  {path:'asatananas',component:AsatananasComponent},
  {path:'costars',component:CostarsComponent},
  {path:'montres',component:MontresComponent},
  {path:'ajouter',component:AjouterComponent}
  
  
  
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
