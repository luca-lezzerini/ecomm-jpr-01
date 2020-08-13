import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

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
  descrizioneCategoriaMod: string;
  idMod:number=null
  listaCategoria: Categoria[];
  listaCategoriaMod:Categoria=new Categoria(0,"")

  listaCategoriaFin: string

  rigaSelezionata: string
  risultatoAgg:string="";
  listaVecchia:Categoria[]=[];

  isShow: boolean = true;

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
    document.getElementById("inputdati").style.display="none";
    document.getElementById("pulsanti").style.display="none";


  }

  aggiungi() {
    let listaVecchia:Categoria[]=this.listaCategoria
    let p = this.criterioRicerca;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/aggiungiCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.risultatoAgg="";
    this.criterioRicerca = "";
    document.getElementById("tabella").style.display="block";
    document.getElementById("ricerca").style.display="block";
    document.getElementById("pulsanti").style.display="none";
    document.getElementById("inputdati").style.display="none";
  }

  conferma(riga:string) {
      let p:Categoria =new Categoria(this.listaCategoriaMod.id,riga)
      console.log(p)
      let ox: Observable<Categoria[]> =
        this.http.post<Categoria[]>(this.urlHost + "/modificaCategoria", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaCategoria =r);
        this.rigaSelezionata=null
        document.getElementById("tabella").style.display="block";
        document.getElementById("ricerca").style.display="block";
        document.getElementById("pulsanti").style.display="none";
        document.getElementById("inputdati").style.display="none";

  }

  annulla() {
    document.getElementById("tabella").style.display="block";
    document.getElementById("ricerca").style.display="block";
    document.getElementById("pulsanti").style.display="none";
    document.getElementById("inputdati").style.display="none";
    this.criterioRicerca = ""
  }

  selezionaModifica(rigaSelezionata: Categoria) {
    let p:Categoria = rigaSelezionata
    let ox: Observable<Categoria> =
      this.http.post<Categoria>(this.urlHost + "/preparaModificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => p=r);
      this.listaCategoriaMod=p
      console.log( this.listaCategoriaMod);
      this.isShow =false;
      document.getElementById("inputdati").style.display="block";
      document.getElementById("pulsanti").style.display="block";
      document.getElementById("tabella").style.display="none";
      document.getElementById("ricerca").style.display="none";
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/cancellaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
  }
}
