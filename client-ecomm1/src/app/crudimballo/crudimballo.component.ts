import { TokenDto } from './../crudtaglia/token-dto';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { Imballo } from './imballo';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListaImballiDto } from './ListaImballiDto';
import { CercaDto } from '../crudtaglia/cerca-dto';

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

  listaImballi: Imballo[] = new Array;
  listaImballoMod: Imballo = new Imballo(0, "", 0)
  mostraForm = false;
  rigaSelezionata: string;

  nuovaDescrizione: string;
  nuovoCosto: number;
  //nuovoPrezzo: number;

  risultatoAgg: string = "";


  isShowModifica: boolean = true;
  isShowRicerca: boolean = false;
  isShowTabella: boolean = false;
  isShowAggiungi: boolean = true;

  constructor(private http: HttpClient, public memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {

  }

  mostraImballi() {
    let tokenDto = new TokenDto(this.memoriaCondivisa.token);
    let b: Observable<ListaImballiDto> =
      this.http.post<ListaImballiDto>(this.urlHost + "/listaImballi", tokenDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaImballi = c.listaImballi;
      }
    )
    this.mostraForm = false
  }
  cerca() {
    let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    let b: Observable<ListaImballiDto> =
      this.http.
        post<ListaImballiDto>(this.urlHost + "/cercaImballo", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaImballi = c.listaImballi;
        this.memoriaCondivisa.token = c.token;
      }
    );
    this.criterioRicerca = "";
    this.mostraForm = false;
  }

  aggiungi() {
    this.isShowAggiungi = false;
    this.isShowRicerca = true;
    this.isShowTabella = true;

  }

  confermaAggiungi(descrizione: string, costo: number) {

    let p: Imballo = new Imballo(0, descrizione, costo);
    console.log(p)
    let ox: Observable<Imballo[]> =
      this.http.post<Imballo[]>(this.urlHost + "/aggiungiImballo", p);
    let ss: Subscription = ox.subscribe(
      r => this.listaImballi = r);
    this.isShowAggiungi = true;
    this.isShowRicerca = false;
    this.isShowTabella = false;
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
      r => this.listaImballi = r);
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
      r => this.listaImballi = r);
    this.isShowTabella = true;
  }
}



