import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRUDColoreComponent } from './crudcolore/crudcolore.component';
import { CRUDTagliaComponent } from './crudtaglia/crudtaglia.component';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CrudanagraficheComponent } from './crudanagrafiche/crudanagrafiche.component';
import { CrudcarelloComponent } from './crudcarello/crudcarello.component';
import { CrudspedizioniComponent } from './crudspedizioni/crudspedizioni.component';
import { CrudimballoComponent } from './crudimballo/crudimballo.component';
import { CrudoffertaComponent } from './crudofferta/crudofferta.component';
import { AssociazioneColoreComponent } from './associazione-colore/associazione-colore.component';
import { AssociaSpedizioneComponent } from './associa-spedizione/associa-spedizione.component';
import { AssociaOffertaComponent } from './associa-offerta/associa-offerta.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { AssociaCategoriaComponent } from './associa-categoria/associa-categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    CRUDColoreComponent,
    CRUDTagliaComponent,
    CrudcategoriaComponent,
    HomePageComponent,
    CrudanagraficheComponent,
    CrudcarelloComponent,
    CrudspedizioniComponent,
    CrudimballoComponent,
    CrudoffertaComponent,
    AssociazioneColoreComponent,
    AssociaSpedizioneComponent,
    AssociaOffertaComponent,
    ProdottoComponent,
    AssociaCategoriaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
