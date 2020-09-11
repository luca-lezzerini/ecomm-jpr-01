import { Router } from '@angular/router';
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


  isShowModifica: boolean = false;
  isShowRicerca: boolean = true;
  isShowTabella: boolean = false;
  isShowAggiungi: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.cerca();
  }

  ngOnInit(): void {

  }


  cerca() {
    console.log("Entrato in cerca");
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
        r => this.listaOfferte = r);
    }
    this.criterioRicerca = "";
    this.isShowTabella = true;
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowModifica = false;
  }

  aggiungi() {
    console.log("Entrato in aggiungi");
    this.isShowAggiungi = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.isShowModifica = false;
  }

  confermaAggiungi(codice: string, descrizione: string, sconto: number) {
    console.log("Entrato in confermaAggiungi");

    let p: Offerta = new Offerta(0, codice, descrizione, sconto);
    console.log(p)
    let ox: Observable<Offerta[]> =
      this.http.post<Offerta[]>(this.urlHost + "/aggiungiOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaOfferte = r);
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.isShowModifica = false;
    this.aggiungiCodice = "";
    this.aggiungiDescrizione = "";
    this.aggiungiSconto = null;

  }

  annullaAggiungi() {
    console.log("Entrato in annullaAggiungi");
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.isShowAggiungi = false;
  }

  conferma(id: number, codice: string, descrizione: string, sconto: number) {
    console.log("Entrato in conferma");
    let p: Offerta = new Offerta(id, codice, descrizione, sconto)
    console.log(p)
    let ox: Observable<Offerta[]> =
      this.http.post<Offerta[]>(this.urlHost + "/modificaOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaOfferte = r);
    this.rigaSelezionata = null
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.isShowAggiungi = false;
    this.nuovoCodice = "";
    this.nuovaDescrizione = "";
    this.nuovoSconto = null;
  }

  annulla() {
    console.log("Entrato in annulla");
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.isShowAggiungi = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Offerta) {
    console.log("Entrato in selezionaModifica");
    let p: Offerta = rigaSelezionata
    let ox: Observable<Offerta> =
      this.http.post<Offerta>(this.urlHost + "/preparaModificaOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => p = r);
    this.listaOffertaMod = p
    console.log(this.listaOffertaMod);
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.isShowAggiungi = false;
  }

  rimuovi(id: number) {
    console.log("Entrato in rimuovi");
    let p = id;
    let ox: Observable<Offerta[]> =
      this.http.post<Offerta[]>(this.urlHost + "/cancellaOfferta", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaOfferte = r);
      this.isShowModifica = false;
      this.isShowRicerca = true;
      this.isShowTabella = true;
      this.isShowAggiungi = false;
    }

    associaProdotto(){
      this.router.navigateByUrl("/AssociaOfferta");
    }
}


