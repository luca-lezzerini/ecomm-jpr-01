import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Taglia } from './taglia';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-crudcolori',
  templateUrl: './crudtaglia.component.html',
  styleUrls: ['./crudtaglia.component.css']
})
export class CRUDTagliaComponent implements OnInit {

  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string = "";

  aggiungiDescrizione: string = "";
  aggiungiSigla: string = "";

  listaTaglia: Taglia[];
  listaTagliaMod: Taglia = new Taglia(0, "", "")

  rigaSelezionata: string;

  nuovaDescrizione: string;
  nuovaSigla: string;

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
      let ox: Observable<Taglia[]> =
        this.http.post<Taglia[]>(this.urlHost + "/cercaTaglia", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaTaglia = r);
    } else {
      let ox: Observable<Taglia[]> =
        this.http.post<Taglia[]>(this.urlHost + "/listaTaglia", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaTaglia = r);
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

  confermaAggiungi(descrizione:string,sigla:string) {

    let p: Taglia = new Taglia(0, descrizione, sigla);
    console.log(p)
    let ox: Observable<Taglia[]> =
      this.http.post<Taglia[]>(this.urlHost + "/aggiungiTaglia", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaTaglia = r);
      this.isShowAggiungi = true;
      this.isShowRicerca =false;
      this.isShowTabella =false;
      this.aggiungiDescrizione = "";
      this.aggiungiSigla = "";

  }

  annullaAggiungi() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = true;
    this.isShowAggiungi = true;
  }

  conferma(id: number, descrizione: string, sigla: string) {
    let p: Taglia = new Taglia(id, descrizione, sigla)
    console.log(p)
    let ox: Observable<Taglia[]> =
      this.http.post<Taglia[]>(this.urlHost + "/modificaTaglia", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaTaglia = r);
    this.rigaSelezionata = null
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.nuovaDescrizione = "";
    this.nuovaSigla = "";
  }

  annulla() {
    this.isShowModifica = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
    this.criterioRicerca = "";
  }

  selezionaModifica(rigaSelezionata: Taglia) {
    let p: Taglia = rigaSelezionata
    let ox: Observable<Taglia> =
      this.http.post<Taglia>(this.urlHost + "/preparaModificaTaglia", p);
    let ss: Subscription = ox.subscribe(
      r => p = r);
    this.listaTagliaMod = p
    console.log(this.listaTagliaMod);
    this.isShowModifica = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Taglia[]> =
      this.http.post<Taglia[]>(this.urlHost + "/cancellaTaglia", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaTaglia = r);
    this.isShowTabella = true;
  }

  }
