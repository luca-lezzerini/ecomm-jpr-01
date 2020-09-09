import { Router } from '@angular/router';
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

  aggiungiCodice: string = "";
  aggiungiNome: string = "";
  aggiungiPrezzo: string = "";

  listaSpedizioni: Spedizioni[] = [];
  listaSpedizioniMod: Spedizioni = new Spedizioni(0, "0", "0", 0)

  rigaSelezionata: string;

  nuovoCodice: string;
  nuovoNome: string;
  nuovoPrezzo: number;

  risultatoAgg: string = "";


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
    let p = this.criterioRicerca;
    if (p) {
      console.log("Siamo in cerca con un criterio");
      let ox: Observable<Spedizioni[]> =
        this.http.post<Spedizioni[]>(this.urlHost + "/cercaSpedizione", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni = r);
    } else {
      console.log("Siamo in cerca per mostrare tutti");
      let ox: Observable<Spedizioni[]> =
        this.http.post<Spedizioni[]>(this.urlHost + "/listaSpedizione", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni = r);
    }
    this.isShowTabella = true;
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
  }

  aggiungi() {
    console.log("Siamo in aggiungi");

    //resetto i campi del form
    this.aggiungiCodice = "";
    this.aggiungiNome = "";
    this.aggiungiPrezzo = "";

    // attivo e disattivo quanto necessario
    this.isShowAggiungi = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;

  }

  confermaAggiungi(codice: string, nome: string, prezzo: number) {
    console.log("Siamo in confermaAggiungi");

    let p: Spedizioni = new Spedizioni(0, codice, nome, prezzo);
    console.log(p)
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/aggiungiSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.aggiungiCodice = "";
    this.aggiungiNome = "";
    this.aggiungiPrezzo = null;

  }

  annullaAggiungi() {
    console.log("Siamo in annullaAggiungi");
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.isShowAggiungi = false;
  }

  conferma(id: number, codice: string, nome: string, prezzo: number) {
    console.log("Siamo in conferma");
    let p: Spedizioni = new Spedizioni(id, codice, nome, prezzo)
    console.log(p)
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/modificaSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
    this.rigaSelezionata = null
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.nuovoCodice = "";
    this.nuovoNome = "";
    this.nuovoPrezzo = null;
  }

  annulla() {
    console.log("Siamo in annulla");
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Spedizioni) {
    console.log("Siamo in selezionaModifica");
    let p: Spedizioni = rigaSelezionata
    let ox: Observable<Spedizioni> =
      this.http.post<Spedizioni>(this.urlHost + "/preparaModificaSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => {
        this.listaSpedizioniMod = r;
        this.nuovoCodice = r.codice;
        this.nuovoNome = r.nome;
        this.nuovoPrezzo = r.prezzoKg;
        console.log(this.listaSpedizioniMod);
      });
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
  }

  rimuovi(id: number) {
    console.log("Siamo in rimuovi");
    let p = id;
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/cancellaSpedizione", p);
    let ss: Subscription = ox.subscribe(
      r => {
        this.listaSpedizioni = r;
        console.log(this.listaSpedizioni);
        console.log(this.isShowTabella);
      });
    this.isShowTabella = true;
  }

  associaProdotto(){
    this.router.navigateByUrl("/AssociaSpedizione");
  }
}

