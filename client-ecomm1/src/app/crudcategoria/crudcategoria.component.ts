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

  isShow1: boolean = true;
  isShow: boolean = false;
  isShow2: boolean = false;

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
    this.isShow2 = false;


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
  }

  conferma(riga:string) {
      let p:Categoria =new Categoria(this.listaCategoriaMod.id,riga)
      console.log(p)
      let ox: Observable<Categoria[]> =
        this.http.post<Categoria[]>(this.urlHost + "/modificaCategoria", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaCategoria =r);
        this.rigaSelezionata=null
        this.isShow1 = true;
        this.isShow = false;
        this.isShow2 = false;
  }

  annulla() {
    this.isShow1 = true;
    this.isShow = false;
    this.isShow2 = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Categoria) {
    let p:Categoria = rigaSelezionata
    let ox: Observable<Categoria> =
      this.http.post<Categoria>(this.urlHost + "/preparaModificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => p=r);
      this.listaCategoriaMod=p
      console.log( this.listaCategoriaMod);
      this.isShow1 = false;
      this.isShow = true;
      this.isShow2 = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/cancellaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.isShow2 = true;
  }
}
