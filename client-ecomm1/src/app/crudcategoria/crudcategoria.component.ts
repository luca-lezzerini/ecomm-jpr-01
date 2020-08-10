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

  rigaSelezionata1: string[]=[];
  risultatoAgg:string="";
  listaVecchia:Categoria[]=[];


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
    let listaVecchia:Categoria[]=this.listaCategoria
    let p = this.criterioRicerca;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/aggiungiCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
     if(this.listaVecchia.length==this.listaCategoria.length){
      this.risultatoAgg="Campo esistente";
     }
     this.risultatoAgg="";
    this.criterioRicerca = "";
  }

  conferma(listaCategoriaMod,rigaSelezionata1) {
    for (let i = 0; i < this.listaCategoriaMod.length; i++) {

     let cat:Categoria=new Categoria
     cat.id=this.listaCategoriaMod[i].id
     cat.descrizione=this.rigaSelezionata1[i]
      this.listaCategoriaFin.push(cat)
     // console.log(this.rigaSelezionata1[i])
    }
    let p = this.listaCategoriaFin;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/modificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.listaCategoriaMod = [];
    this.listaCategoriaFin = [];

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


