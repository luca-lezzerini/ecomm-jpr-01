import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudcategoria',
  templateUrl: './crudcategoria.component.html',
  styleUrls: ['./crudcategoria.component.css']
})
export class CrudcategoriaComponent implements OnInit {


  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string ="";
  aggiungiCategoria: string = "";
  descrizioneCategoria: string;

  listaCategoria: Categoria [];
  listaCategoria1: Categoria []= this.listaCategoria;

  rigaSelezionata1: Categoria;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cerca() {
    let p = this.criterioRicerca;
    if(p=this.criterioRicerca){
    let ox: Observable<Categoria[]> =
    this.http.post<Categoria[]>(this.urlHost + "/cercaCategoria", p);
    let ss: Subscription = ox.subscribe(
    r => this.listaCategoria = r);
    }else{
    let ox: Observable<Categoria[]> =
    this.http.post<Categoria[]>(this.urlHost + "/lista", p);
    let ss: Subscription = ox.subscribe(
    r => this.listaCategoria = r);
    }
    this.criterioRicerca = "";
  }

  aggiungi() {
    let p = this.criterioRicerca;
    let ox: Observable<Categoria[]> =
    this.http.post<Categoria[]>(this.urlHost + "/aggiungiCategoria", p);
    let ss: Subscription = ox.subscribe(
    r => this.listaCategoria = r);
    this.criterioRicerca = "";
  }

  conferma(){
    let p = this.rigaSelezionata1;
    let ox: Observable<Categoria[]> =
    this.http.post<Categoria[]>(this.urlHost + "/modifica", p);
    let ss: Subscription = ox.subscribe(
    r => this.listaCategoria = r);
  }
  annulla(){

  }

  selezionaModifica(rigaSelezionata:Categoria){
    let l : Categoria
    let p = rigaSelezionata
    let ox: Observable<Categoria> =
    this.http.post<Categoria>(this.urlHost + "/preparaModifica", p);
    let ss: Subscription = ox.subscribe(
    r => this.listaCategoria1.push(r));

  }

  rimuovi(id:number){
    let p = id;
    let ox: Observable<Categoria[]> =
    this.http.post<Categoria[]>(this.urlHost + "/cancella", p);
    let ss: Subscription = ox.subscribe(
    r => this.listaCategoria = r);
  }
}


