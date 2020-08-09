import { CarelloComponent } from './carello/carello.component';
import { AnagraficheComponent } from './anagrafiche/anagrafiche.component';
import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';
import { CRUDTagliaComponent } from './crudtaglia/crudtaglia.component';
import { CRUDColoreComponent } from './crudcolore/crudcolore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'CRUDColore', component: CRUDColoreComponent },
  { path: 'CRUDTaglia', component: CRUDTagliaComponent },
  { path: 'CRUDCategoria', component: CrudcategoriaComponent },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'Anagrafiche', component: AnagraficheComponent },
  { path: 'Carello', component: CarelloComponent },
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
