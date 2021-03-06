import { AssociaTagliaComponent } from './associa-taglia/associa-taglia.component';
import { AssociaCategoriaComponent } from './associa-categoria/associa-categoria.component';
import { AssociazioneColoreComponent } from './associazione-colore/associazione-colore.component';
import { CrudoffertaComponent } from './crudofferta/crudofferta.component';
import { CrudspedizioniComponent } from './crudspedizioni/crudspedizioni.component';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';
import { CRUDTagliaComponent } from './crudtaglia/crudtaglia.component';
import { CRUDColoreComponent } from './crudcolore/crudcolore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CrudcarelloComponent } from './crudcarello/crudcarello.component';
import { CrudanagraficheComponent } from './crudanagrafiche/crudanagrafiche.component';
import { CrudimballoComponent } from './crudimballo/crudimballo.component';
import { AssociaSpedizioneComponent } from './associa-spedizione/associa-spedizione.component';
import { AssociaOffertaComponent } from './associa-offerta/associa-offerta.component';


const routes: Routes = [
  { path: 'CRUDColore', component: CRUDColoreComponent },
  { path: 'CRUDTaglia', component: CRUDTagliaComponent },
  { path: 'CRUDCategoria', component: CrudcategoriaComponent },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'CRUDCarello', component: CrudcarelloComponent },
  { path: 'CRUDAnagrafiche', component: CrudanagraficheComponent},
  { path: 'CRUDSpedizioni', component: CrudspedizioniComponent},
  { path: 'CRUDImballo', component: CrudimballoComponent},
  { path: 'CRUDOfferta', component: CrudoffertaComponent},
  { path: 'AssociazioneColore', component:AssociazioneColoreComponent},
  { path: 'AssociaSpedizione', component:AssociaSpedizioneComponent},
  { path: 'AssociaOfferta', component:AssociaOffertaComponent},
  { path: 'AssociaCategoria', component:AssociaCategoriaComponent},
  { path: 'AssociaTaglia', component:AssociaTagliaComponent},

  { path: '', redirectTo: '/HomePage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
