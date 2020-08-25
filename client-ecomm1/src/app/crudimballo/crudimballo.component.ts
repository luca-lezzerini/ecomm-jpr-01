import { Imballo } from './imballo';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crudimballo',
  templateUrl: './crudimballo.component.html',
  styleUrls: ['./crudimballo.component.css']
})
export class CrudimballoComponent implements OnInit {

  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string = "";

  aggiungiDescrizione: string = "";
  aggiungiCosto: string = "";
  //aggiungiPrezzo: string = "";

  listaImballo: Imballo[];
  listaImballoMod: Imballo = new Imballo(0, "", 0)

  rigaSelezionata: string;

  nuovaDescrizione: string;
  nuovoCosto: number;
  //nuovoPrezzo: number;

  risultatoAgg: string = "";


  isShowModifica: boolean = true;
  isShowRicerca: boolean = false;
  isShowTabella: boolean = false;
  isShowAggiungi: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }


  cerca() {
    let p = this.criterioRicerca;
    if (p = this.criterioRicerca) {
      let ox: Observable<Imballo[]> =
        this.http.post<Imballo[]>(this.urlHost + "/cercaImballo", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaImballo = r);
    } else {
      let ox: Observable<Imballo[]> =
        this.http.post<Imballo[]>(this.urlHost + "/listaImballo", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaImballo = r);
    }
    this.criterioRicerca = "";
    this.isShowTabella = false;
    this.isShowAggiungi = true;
    this.isShowRicerca = false;
  }

  aggiungi() {
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;

  }

  confermaAggiungi(descrizione:string,costo:number) {

    let p: Imballo = new Imballo(0, descrizione, costo);
    console.log(p)
    let ox: Observable<Imballo[]> =
      this.http.post<Imballo[]>(this.urlHost + "/aggiungiImballo", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaImballo = r);
      this.isShowAggiungi = true;
      this.isShowRicerca =false;
      this.isShowTabella =false;
      this.aggiungiDescrizione = "";
      this.aggiungiCosto = null;

  }

  annullaAggiungi() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = true;
    this.isShowAggiungi = true;
  }

  conferma(id: number, descrizione: string, costo: number) {
    let p: Imballo = new Imballo(id, descrizione, costo)
    console.log(p)
    let ox: Observable<Imballo[]> =
      this.http.post<Imballo[]>(this.urlHost + "/modificaImballo", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaImballo = r);
    this.rigaSelezionata = null
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.nuovaDescrizione = "";
    this.nuovoCosto = null;
  }

  annulla() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Imballo) {
    let p: Imballo = rigaSelezionata
    let ox: Observable<Imballo> =
      this.http.post<Imballo>(this.urlHost + "/preparaModificaImballo", p);
    let ss: Subscription = ox.subscribe(
      r => p = r);
    this.listaImballoMod = p
    console.log(this.listaImballoMod);
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Imballo[]> =
      this.http.post<Imballo[]>(this.urlHost + "/cancellaImballo", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaImballo = r);
    this.isShowTabella = true;
  }
}



