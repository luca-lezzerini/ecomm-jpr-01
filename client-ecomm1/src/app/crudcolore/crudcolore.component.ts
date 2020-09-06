import { Token } from './../token';
import { ListaColoreDto } from './lista-colore-dto';
import { TokenDto } from './token-dto';

import { CercaDto } from './cerca-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';
import { Observable, Subscription } from 'rxjs';
import { MemoriaCondivisaService } from '../memoria-condivisa-service';
import { ColoreDto } from './colore-dto';

@Component({
  selector: 'app-crudcolore',
  templateUrl: './crudcolore.component.html',
  styleUrls: ['./crudcolore.component.css']
})
export class CRUDColoreComponent implements OnInit {

  searchCriteria = "";
  aggiungiColore = "";
  listaColore: Colore[] = new Array();
  readonly urlHost = "http://localhost:8080";
  mostraForm = false;

  constructor(private http: HttpClient, public memoriaCondivisa: MemoriaCondivisaService) { }

  tokenDto = new TokenDto(this.memoriaCondivisa.token);

  ngOnInit(): void {
  }


  cerca() {
    let cercaDto = new CercaDto(this.searchCriteria, this.memoriaCondivisa.token);
    let b: Observable<ListaColoreDto> =
      this.http.
        post<ListaColoreDto>(this.urlHost + "/cercaColore", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaColore = c.listaColori;
        this.memoriaCondivisa.token = c.token;
      }
    );
    this.searchCriteria = "";
    this.mostraForm = false;
  }

  cercaTutto() {
    let b: Observable<ListaColoreDto> =
      this.http.
        post<ListaColoreDto>(this.urlHost + "/mostraTuttiColori", this.tokenDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaColore = c.listaColori;
        this.memoriaCondivisa.token = c.token;
      }
    );
    //console.log(this.memoriaCondivisa.token.token);
    this.mostraForm = false;
  }

  aggiungi() {
    this.mostraForm = true;
  }

  conferma() {
    let nuovoColore = new CercaDto(this.aggiungiColore, this.memoriaCondivisa.token);
    let b: Observable<ColoreDto> =
      this.http.post<ColoreDto>(this.urlHost + "/aggiungiColore", nuovoColore);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaColore.push(c.colore);
        this.memoriaCondivisa.token = c.token;
      }
    );
    this.mostraForm = false;
    this.aggiungiColore = "";
  }

  annulla() {
    this.mostraForm = false;
    this.aggiungiColore = "";
  }

  modifica(colore: Colore) {
    console.log("\n\n" + colore.colore);
    let coloreDto = new ColoreDto(colore, this.memoriaCondivisa.token);
    this.http.post(this.urlHost + "/modificaColore", coloreDto).subscribe({ error: e => console.error(e) });
  }

  rimuovi(colore: Colore) {
    console.log("\n\n" + colore.colore);
    let coloreDto = new ColoreDto(colore, this.memoriaCondivisa.token);
    this.http.post(this.urlHost + "/rimuoviColore", coloreDto).subscribe({ error: e => console.error(e) });
    for (let i = 0; i < this.listaColore.length; i++) {
      if (this.listaColore[i].id == colore.id) {
        this.listaColore.splice(i, 1);
      }
    }
  }
}