import { Spedizioni } from './spedizioni';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crudspedizioni',
  templateUrl: './crudspedizioni.component.html',
  styleUrls: ['./crudspedizioni.component.css']
})
export class CrudspedizioniComponent implements OnInit {

  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string = "";
  criterioRicerca1: string = "";
  criterioRicerca2: string = "";
  criterioRicerca3: string = "";

  listaSpedizioni: Spedizioni[];
  listaSpedizioniMod: Spedizioni = new Spedizioni(0, "0", "0", 0)

  rigaSelezionata: string;
  rigaSelezionata1: string;
  rigaSelezionata2: string;
  rigaSelezionata3: number;
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
      let ox: Observable<Spedizioni[]> =
        this.http.post<Spedizioni[]>(this.urlHost + "/cercaSpedizione", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni = r);
    } else {
      let ox: Observable<Spedizioni[]> =
        this.http.post<Spedizioni[]>(this.urlHost + "/listaSpedizione", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni = r);
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

  confermaAggiungi(codice:string, nome:string, prezzo:number) {

    let p: Spedizioni = new Spedizioni(0, codice, nome, prezzo);
    console.log(p)
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/aggiungiSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
      this.isShowAggiungi = true;
      this.isShowRicerca =false;
      this.isShowTabella =false;
      this.criterioRicerca1 = "";
      this.criterioRicerca2 = "";
      this.criterioRicerca3 = "";

  }

  annullaAggiungi() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = true;
    this.isShowAggiungi = true;
  }

  conferma(id: number, codice: string, nome: string, prezzo: number) {
    let p: Spedizioni = new Spedizioni(id, codice, nome, prezzo)
    console.log(p)
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/modificaSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
    this.rigaSelezionata = null
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.rigaSelezionata1 = "";
    this.rigaSelezionata2 = "";
    this.rigaSelezionata3 = null;
  }

  annulla() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Spedizioni) {
    let p: Spedizioni = rigaSelezionata
    let ox: Observable<Spedizioni> =
      this.http.post<Spedizioni>(this.urlHost + "/preparaModificaSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => p = r);
    this.listaSpedizioniMod = p
    console.log(this.listaSpedizioniMod);
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/cancellaSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
    this.isShowTabella = true;
  }
}

