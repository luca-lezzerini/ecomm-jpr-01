import { Router } from '@angular/router';
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
  listaCategoria: Categoria[] = [];
  listaCategoriaMod: Categoria = new Categoria(0, "");
  rigaSelezionata: string = "";
  risultatoAgg: string = "";
  aggiungiDescrizione: string = "";
  nuovaDescrizione: string;
  numeroTotale: number = 0;
  numeroPagine: number = 0;
  paginaCorrente: number = 1;

  isShowModifica: boolean = false;
  isShowRicerca: boolean = true;
  isShowTabella: boolean = true;
  isShowAggiungi: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.cerca();
  }

  ngOnInit(): void {

  }

  cerca() {
    console.log("Siamo in cerca");
    let dto = new CategoriaDto();
    dto.categoria.descrizione = this.criterioRicerca;
    dto.paginaCorrente = this.paginaCorrente;
    dto.numeroElementiXPagina = 10;
    if (this.criterioRicerca) {
      console.log("Siamo in cerca con un criterio");
      let ox: Observable<ListaCategorieDto> =
        this.http.post<ListaCategorieDto>(this.urlHost + "/cercaCategoria", dto);
      let ss: Subscription = ox.subscribe(
        r => {
          this.listaCategoria = r.lista;
          this.numeroTotale = r.numeroTotaleElementi;
          this.numeroPagine = r.numeroTotalePagine;
          this.paginaCorrente = r.paginaCorrente;
        });
    } else {
      console.log("Siamo in cerca per mostrare tutti");
      let ox: Observable<ListaCategorieDto> =
        this.http.post<ListaCategorieDto>(this.urlHost + "/listaCategoria", dto);
      let ss: Subscription = ox.subscribe(
        r => {
          this.listaCategoria = r.lista;
          this.numeroTotale = r.numeroTotaleElementi;
          this.numeroPagine = r.numeroTotalePagine;
          this.paginaCorrente = r.paginaCorrente;
        });
    }
    this.isShowTabella = true;
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowModifica = false;
  }

  aggiungi() {
    console.log("Siamo in aggiungi");

    //resetto i campi del form
    this.aggiungiDescrizione = "";


    // attivo e disattivo quanto necessario
    this.isShowAggiungi = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    /*
        let listaVecchia: Categoria[] = this.listaCategoria
        let p = this.criterioRicerca;
        let ox: Observable<Categoria[]> =
          this.http.post<Categoria[]>(this.urlHost + "/aggiungiCategoria", p);
        let ss: Subscription = ox.subscribe(
          r => this.listaCategoria = r);
        this.risultatoAgg = "";
        this.criterioRicerca = "";
        */
  }

  confermaAggiungi(descrizione: string) {
    /*
    console.log("Siamo in confermaAggiungi");

    let p: Categoria = new (0, descrizione);
    console.log(p)
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/aggiungiCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaCategoria = r);
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.aggiungiDescrizione = "";
      */
  }

  annullaAggiungi() {
    console.log("Siamo in annullaAggiungi");
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.isShowAggiungi = false;
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
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.nuovaDescrizione = "";
  }

  annulla() {
    console.log("Siamo in annulla");
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Categoria) {
    console.log("Siamo in selezionaModifica");
    let p: Categoria = rigaSelezionata
    let ox: Observable<Categoria> =
      this.http.post<Categoria>(this.urlHost + "/preparaModificaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => {
        this.listaCategoriaMod = r;
        this.nuovaDescrizione = r.descrizione;

        console.log(this.listaCategoriaMod);
      });
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
  }

  rimuovi(id: number) {
    console.log("Siamo in rimuovi");
    let p = id;
    let ox: Observable<Categoria[]> =
      this.http.post<Categoria[]>(this.urlHost + "/cancellaCategoria", p);
    let ss: Subscription = ox.subscribe(
      r => {
        this.listaCategoria = r;
        console.log(this.listaCategoria);
        console.log(this.isShowTabella);
      });
    this.isShowTabella = true;
  }

  associaProdotto() {
    this.router.navigateByUrl("/AssociaCategoria");
  }

  paginaDopo() {
    // cambio pagina
    this.paginaCorrente++;
    this.cerca();
    // // recupero un eventuale criterio di ricerca
    // let p = this.criterioRicerca;
    // // creo e popolo il DTO di richiesta
    // let dto = new CategoriaDto();
    // dto.categoria.descrizione = p;
    // dto.paginaCorrente = this.paginaCorrente;

    // console.log(dto);
    // // chiama il server
    // let ox: Observable<ListaCategorieDto> =
    //   this.http.post<ListaCategorieDto>(this.urlHost + "/listaCategoria", dto);
    // let ss: Subscription = ox.subscribe(
    //   r => {
    //     this.listaCategoria = r.lista;
    //     this.numeroTotale = r.numeroTotaleElementi;
    //     this.numeroPagine = r.numeroTotalePagine;
    //     this.paginaCorrente = r.paginaCorrente;
    //   });
  }

  paginaPrima() {
    console.log("Siamo in paginaPrima con pagina " + this.paginaCorrente);
    // cambio pagina
    this.paginaCorrente--;
    this.cerca();
    // // recupero un eventuale criterio di ricerca
    // let p = this.criterioRicerca;
    // // creo e popolo il DTO di richiesta
    // let dto = new CategoriaDto();
    // dto.categoria.descrizione = p;
    // dto.paginaCorrente = this.paginaCorrente;

    // console.log(dto);
    // // chiama il server
    // let ox: Observable<ListaCategorieDto> =
    //   this.http.post<ListaCategorieDto>(this.urlHost + "/listaCategoria", dto);
    // let ss: Subscription = ox.subscribe(
    //   r => {
    //     this.listaCategoria = r.lista;
    //     this.numeroTotale = r.numeroTotaleElementi;
    //     this.numeroPagine = r.numeroTotalePagine;
    //     this.paginaCorrente = r.paginaCorrente;
    //   });
  }
}

