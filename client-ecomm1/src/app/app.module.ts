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



@NgModule({
  declarations: [
    AppComponent,
    CRUDColoreComponent,
    CRUDTagliaComponent,
    CrudcategoriaComponent,
    HomePageComponent,
    CrudanagraficheComponent,
    CrudcarelloComponent,

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
