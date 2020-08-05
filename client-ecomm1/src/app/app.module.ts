
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRUDColoriComponent } from './crudcolori/crudcolori.component';
import { CRUDTagliaComponent } from './crudtaglia/crudtaglia.component';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CRUDColoriComponent,
    CRUDTagliaComponent,
    CrudcategoriaComponent
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
