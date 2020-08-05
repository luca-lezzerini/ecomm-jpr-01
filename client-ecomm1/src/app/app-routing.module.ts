import { CrudcategoriaComponent } from './crudcategoria/crudcategoria.component';
import { CRUDTagliaComponent } from './crudtaglia/crudtaglia.component';
import { CRUDColoreComponent } from './crudcolore/crudcolore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'CRUDColore', component: CRUDColoreComponent },
  { path: 'CRUDTaglia', component: CRUDTagliaComponent },
  { path: 'CRUDCategoria', component: CrudcategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
