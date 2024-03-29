import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KnjigaService } from './Services/knjiga.service';
import { HomeComponent } from './Components/home/home.component';
import { TipKnjigeService } from './Services/tip-knjige.service';
import { KnjigaComponent } from './Components/knjiga/knjiga.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TipKnjigeComponent } from './Components/tip-knjige/tip-knjige.component';
import { TipKnjigeFormComponent } from './Components/tip-knjige-form/tip-knjige-form.component';
import { KorisnikComponent } from './Components/korisnik/korisnik.component';
import { KupacComponent } from './Components/kupac/kupac.component';
import { ClanskaKartaComponent } from './Components/clanska-karta/clanska-karta.component';
import { PisacComponent } from './Components/pisac/pisac.component';
import { NagradaComponent } from './Components/nagrada/nagrada.component';
import { ProdajaComponent } from './Components/prodaja/prodaja.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PisacFormComponent } from './Components/pisac-form/pisac-form.component';
import { IzdavacFormComponent } from './Components/izdavac-form/izdavac-form.component';
import { IzdavacComponent } from './Components/izdavac/izdavac.component';
import { KorisnikFormComponent } from './Components/korisnik-form/korisnik-form.component';
import { KupacFormComponent } from './Components/kupac-form/kupac-form.component';
import { NagradaFormComponent } from './Components/nagrada-form/nagrada-form.component';
import { KnjigaFormComponent } from './Components/knjiga-form/knjiga-form.component';
import { ProdajaFormComponent } from './Components/prodaja-form/prodaja-form.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClanskaKartaFormComponent } from './Components/clanska-karta-form/clanska-karta-form.component';
import { PisacInfoComponent } from './Components/pisac-info/pisac-info.component';
import { KnjigaPiscuFormComponent } from './Components/knjiga-piscu-form/knjiga-piscu-form.component';
import { TipInfoComponent } from './Components/tip-info/tip-info.component';
import { IzdavacInfoComponent } from './Components/izdavac-info/izdavac-info.component';
import { KnjigaIzdavacFormComponent } from './Components/knjiga-izdavac-form/knjiga-izdavac-form.component';
import { NagradaInfoComponent } from './Components/nagrada-info/nagrada-info.component';
import { KnjigaNagradiFormComponent } from './Components/knjiga-nagradi-form/knjiga-nagradi-form.component';
import { KnjigaInfoComponent } from './Components/knjiga-info/knjiga-info.component';
import { KnjigaTipuFormComponent } from './Components/knjiga-tipu-form/knjiga-tipu-form.component';
import { ProdajaInfoComponent } from './Components/prodaja-info/prodaja-info.component';
import { KnjigaProdajiFormComponent } from './Components/knjiga-prodaji-form/knjiga-prodaji-form.component';





@NgModule({
  declarations: [
    AppComponent,
    KnjigaComponent,
    HomeComponent,
    PageNotFoundComponent,
    TipKnjigeComponent,
    TipKnjigeFormComponent,
    KorisnikComponent,
    KupacComponent,
    ClanskaKartaComponent,
    PisacComponent,
    NagradaComponent,
    ProdajaComponent,
    PisacFormComponent,
    IzdavacFormComponent,
    IzdavacComponent,
    KorisnikFormComponent,
    KupacFormComponent,
    NagradaFormComponent,
    KnjigaFormComponent,
    ProdajaFormComponent,
    ClanskaKartaFormComponent,
    PisacInfoComponent,
    KnjigaPiscuFormComponent,
    TipInfoComponent,
    IzdavacInfoComponent,
    KnjigaIzdavacFormComponent,
    NagradaInfoComponent,
    KnjigaNagradiFormComponent,
    KnjigaInfoComponent,
    KnjigaTipuFormComponent,
    ProdajaInfoComponent,
    KnjigaProdajiFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [
    KnjigaService,
    TipKnjigeService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
