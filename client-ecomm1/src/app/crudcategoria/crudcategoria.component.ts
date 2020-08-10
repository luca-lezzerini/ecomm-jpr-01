import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-crudcategoria',
  templateUrl: './crudcategoria.component.html',
  styleUrls: ['./crudcategoria.component.css']
})
export class CrudcategoriaComponent implements OnInit {


  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string = "";
  aggiungiCategoria: string = "";
  descrizioneCategoria: string;

  listaCategoria: Categoria[];
  listaCategoriaMod: Categoria[] = [];
  listaCategoriaFin: Categoria[] = [];

  rigaSelezionata1: string;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cerca() {
    let p = this.criterioRicerca;
    if (p = this.criterioRicerca) {
      let ox: Observable<Categoria[]> =
        this.http.post<Categoria[]>(this.urlHost + "/cercaCategoria", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaCategoria = r);
    } else {
      let ox: Observable<Categoria[]> =
        this.http.post<Categoria[]>(this.urlHost + "/listaCategoria", p);
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

  conferma() {
    for (let i = 0; i < this.listaCategoriaMod.length; i++) {

     let cat:Categoria=new Categoria
     cat.id=this.listaCategoriaMod[i].id
     cat.descrizione=this.rigaSelezionata1

    }
    let p = this.listaCategoriaFin;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/modificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.listaCategoriaMod = [];
  }
  annulla() {
    this.listaCategoriaMod = [];
  }

  selezionaModifica(rigaSelezionata: Categoria) {
    let l: Categoria
    let p = rigaSelezionata
    let ox: Observable<Categoria> =
      this.http.post<Categoria>(this.urlHost + "/preparaModificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoriaMod.push(p));

  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/cancellaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
  }
}


