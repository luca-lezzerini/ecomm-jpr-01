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
  aggiungiSpedizioni: string = "";
  descrizioneSpedizioni: string;
  descrizioneSpedizioniMod: string;
  idMod:number=null
  listaSpedizioni: Spedizioni[];
  listaSpedizioniMod:Spedizioni=new Spedizioni()

  listaSpedizioniFin: string

  rigaSelezionata: string;
  rigaSelezionata1: string;
  risultatoAgg:string="";
  listaVecchia:Spedizioni[]=[];

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
        this.http.post<Spedizioni[]>(this.urlHost + "/cercaSpedizioni", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni = r);
    } else {
      let ox: Observable<Spedizioni[]> =
        this.http.post<Spedizioni[]>(this.urlHost + "/listaSpedizioni", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni = r);
    }
    this.criterioRicerca = "";
    this.isShowTabella = false;



  }

  aggiungi() {
    /*let listaVecchia:Spedizioni[]=this.listaSpedizioni
    let p = this.criterioRicerca;
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/aggiungiSpedizioni", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
    this.risultatoAgg="";
    this.criterioRicerca = "";*/
    this.isShowAggiungi = false;
    this.isShowRicerca =true;
    this.isShowTabella =true;

  }

  conferma(riga:string) {
      let p:Spedizioni =new Spedizioni()
      console.log(p)
      let ox: Observable<Spedizioni[]> =
        this.http.post<Spedizioni[]>(this.urlHost + "/modificaSpedizioni", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaSpedizioni =r);
        this.rigaSelezionata=null
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

  selezionaModifica(rigaSelezionata: Spedizioni) {
    let p:Spedizioni = rigaSelezionata
    let ox: Observable<Spedizioni> =
      this.http.post<Spedizioni>(this.urlHost + "/preparaModificaSpedizioni", p);
    let ss: Subscription = ox.subscribe(
      r => p=r);
      this.listaSpedizioniMod=p
      console.log( this.listaSpedizioniMod);
      this.isShowModifica = false;
      this.isShowRicerca = true;
      this.isShowTabella = true;
  }

  rimuovi(id: number) {
    let p = id;
    let ox: Observable<Spedizioni[]> =
      this.http.post<Spedizioni[]>(this.urlHost + "/cancellaSpedizioni", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaSpedizioni = r);
    this.isShowTabella = true;
  }
}

