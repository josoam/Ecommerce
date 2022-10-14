import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './COMPONENTS/header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
//import { LoginComponent } from './PAGES/login/login.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import{CheckoutSubtotalComponent}from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

import{NgbModule}from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './COMPONENTS/sidebar/sidebar.component';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import{ MatSidenavModule}from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { VoitureComponent } from './COMPONENTS/voiture/voiture.component';
import { SmartphoneComponent } from './COMPONENTS/smartphone/smartphone.component';
import { OrdinateurComponent } from './COMPONENTS/ordinateur/ordinateur.component';
import { LivreComponent } from './COMPONENTS/livre/livre.component';
//import { OwlModule } from 'ngx-owl-carousel';
import { FilmComponent } from './COMPONENTS/film/film.component';
import { MontreComponent } from './COMPONENTS/montre/montre.component';
import { FilmsComponent } from './COMPONENTS/films/films.component';
import { LivresComponent } from './COMPONENTS/livres/livres.component';
import { MusicComponent } from './COMPONENTS/music/music.component';
import { MusicsComponent } from './COMPONENTS/musics/musics.component';
import { JeuxComponent } from './COMPONENTS/jeux/jeux.component';
import { JeuxsComponent } from './COMPONENTS/jeuxs/jeuxs.component';
import { SacComponent } from './COMPONENTS/sac/sac.component';
import { IgxBannerModule } from 'igniteui-angular';
import { BannersComponent } from './COMPONENTS/banners/banners.component';
import { FormsModule,} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { 
	IgxNavbarModule,
	IgxCardModule,
	IgxIconModule
 } from "igniteui-angular";
import { PaymentComponent } from './COMPONENTS/payment/payment.component';
import { FrontComponent } from './COMPONENTS/front/front.component';
import { PrincipalComponent } from './COMPONENTS/principal/principal.component';
import { PrincipalsComponent } from './COMPONENTS/principals/principals.component';
import { Front1Component } from './COMPONENTS/front1/front1.component';
import { Front2Component } from './COMPONENTS/front2/front2.component';
import { TenisComponent } from './COMPONENTS/tenis/tenis.component';
import { TenissComponent } from './COMPONENTS/teniss/teniss.component';
import { PaymenttComponent } from './COMPONENTS/paymentt/paymentt.component';
import { HomesComponent } from './PAGES/homes/homes.component';

import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';

import { RouterModule } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';

 
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from "@angular/material/table";

import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';
import { StarComponent } from './star/star.component';
import { SmartphonesComponent } from './COMPONENTS/smartphones/smartphones.component';
import { BijouxComponent } from './COMPONENTS/bijoux/bijoux.component';
import { BijouxsComponent } from './COMPONENTS/bijouxs/bijouxs.component';

import { TesComponent } from './COMPONENTS/tes/tes.component';
import { TessComponent } from './COMPONENTS/tess/tess.component';
import { AsatananaComponent } from './COMPONENTS/asatanana/asatanana.component';
import { AsatananasComponent } from './COMPONENTS/asatananas/asatananas.component';
import { CostarComponent } from './COMPONENTS/costar/costar.component';
import { CostarsComponent } from './COMPONENTS/costars/costars.component';
import { OrdinateursComponent } from './COMPONENTS/ordinateurs/ordinateurs.component';
import { FilterPipe } from './shared/filter.pipe';
import { MontresComponent } from './COMPONENTS/montres/montres.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AdministrateurComponent } from './COMPONENTS/administrateur/administrateur.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   StarComponent,
    FooterComponent,
    CheckoutComponent,
   // LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    SidebarComponent,
  
    VoitureComponent,
    SmartphoneComponent,
    OrdinateurComponent,
    LivreComponent,
    
    FilmComponent,
    MontreComponent,
    FilmsComponent,
    LivresComponent,
    MusicComponent,
    MusicsComponent,
    JeuxComponent,
    JeuxsComponent,
    SacComponent,
    BannersComponent,
    PaymentComponent,
    FrontComponent,
    PrincipalComponent,
    PrincipalsComponent,
    Front1Component,
    Front2Component,
    TenisComponent,
    TenissComponent,
    PaymenttComponent,
    HomesComponent,
    LoginComponent,
    SinupComponent,
    SmartphonesComponent,
    BijouxComponent,
    BijouxsComponent,
    
    TesComponent,
    TessComponent,
    AsatananaComponent,
    AsatananasComponent,
    CostarComponent,
    CostarsComponent,
    OrdinateursComponent,
    FilterPipe,
    MontresComponent,
    AjouterComponent,
    AdministrateurComponent,
  
  
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDividerModule,
    IgxBannerModule,
    
    IgxBannerModule,
	IgxCardModule,
	IgxIconModule,
	IgxNavbarModule,
  ToastrModule.forRoot(),
  RouterModule,
  FormsModule, ReactiveFormsModule ,
  MatMenuModule,
  
  MatButtonModule,
 
  MatListModule,
  MatTableModule,
  //MatPaginatorModule,
  //MatSortModule,
  MatGridListModule,
  
  
  
  
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    
 
  ],
  
  providers: [
    ScreenTrackingService,UserTrackingService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
