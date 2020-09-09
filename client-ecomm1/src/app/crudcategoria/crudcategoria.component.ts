import { ListaCategorieDto } from './lista-categorie-dto';
import { CategoriaDto } from './categoria-dto';
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
  listaCategoria: Categoria[];
  listaCategoriaMod: Categoria = new Categoria(0, "")
  rigaSelezionata: string
  risultatoAgg: string = "";

  isShowModifica: boolean = true;
  isShowRicerca: boolean = false;
  isShowTabella: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }


  cerca() {
    let p = this.criterioRicerca;
    if (p) {
      let ox: Observable<ListaCategorieDto> =
        this.http.post<ListaCategorieDto>(this.urlHost + "/cercaCategoria", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaCategoria = r.lista);
    } else {
      let ox: Observable<ListaCategorieDto> =
        this.http.post<ListaCategorieDto>(this.urlHost + "/listaCategoria", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaCategoria = r.lista);
    }
    this.criterioRicerca = "";
    this.isShowTabella = false;


  }

  aggiungi() {
    let listaVecchia: Categoria[] = this.listaCategoria
    let p = this.criterioRicerca;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/aggiungiCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.risultatoAgg = "";
    this.criterioRicerca = "";
  }

  conferma() {
    let p: CategoriaDto = new CategoriaDto();
    //TODO categoria
    console.log(p)
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/modificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.rigaSelezionata = null
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
  }

  annulla() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Categoria) {
    let p: CategoriaDto = new CategoriaDto();
    p.categoria = rigaSelezionata;
    //TODO: popolare il token 
    let ox: Observable<CategoriaDto> =
      this.http.post<CategoriaDto>(this.urlHost + "/preparaModificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => {
        this.listaCategoriaMod = r.categoria;
        console.log(this.listaCategoriaMod);
      });
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/cancellaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.isShowTabella = true;
  }
}
