import { Offerta } from './offerta';

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crudofferta',
  templateUrl: './crudofferta.component.html',
  styleUrls: ['./crudofferta.component.css']
})
export class CrudoffertaComponent implements OnInit {

  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string = "";

  aggiungiCodice: string = "";
  aggiungiDescrizione: string = "";
  aggiungiSconto: string = "";

  listaOfferte: Offerta[];
  listaOffertaMod: Offerta = new Offerta(0, "0", "0", 0)

  rigaSelezionata: string;

  nuovoCodice: string;
  nuovaDescrizione: string;
  nuovoSconto: number;

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
      let ox: Observable<Offerta[]> =
        this.http.post<Offerta[]>(this.urlHost + "/cercaOfferta", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaOfferte = r);
    } else {
      let ox: Observable<Offerta[]> =
        this.http.post<Offerta[]>(this.urlHost + "/listaOfferta", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaOfferte= r);
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

  confermaAggiungi(codice:string, descrizione:string, sconto:number) {

    let p: Offerta = new Offerta(0, codice, descrizione, sconto);
    console.log(p)
    let ox: Observable<Offerta[]> =
      this.http.post<Offerta[]>(this.urlHost + "/aggiungiOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaOfferte = r);
      this.isShowAggiungi = true;
      this.isShowRicerca =false;
      this.isShowTabella =false;
      this.aggiungiCodice = "";
      this.aggiungiDescrizione = "";
      this.aggiungiSconto = null;

  }

  annullaAggiungi() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = true;
    this.isShowAggiungi = true;
  }

  conferma(id: number, codice: string, descrizione: string, sconto: number) {
    let p: Offerta = new Offerta(id, codice, descrizione, sconto)
    console.log(p)
    let ox: Observable<Offerta[]> =
      this.http.post<Offerta[]>(this.urlHost + "/modificaOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaOfferte = r);
    this.rigaSelezionata = null
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.nuovoCodice = "";
    this.nuovaDescrizione = "";
    this.nuovoSconto = null;
  }

  annulla() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Offerta) {
    let p: Offerta = rigaSelezionata
    let ox: Observable<Offerta> =
      this.http.post<Offerta>(this.urlHost + "/preparaModificaOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => p = r);
    this.listaOffertaMod = p
    console.log(this.listaOffertaMod);
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Offerta[]> =
      this.http.post<Offerta[]>(this.urlHost + "/cancellaOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaOfferte = r);
    this.isShowTabella = true;
  }
}


