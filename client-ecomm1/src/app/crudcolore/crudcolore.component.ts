
import { ColoreDto } from './colore-dto';
import { TokenDto } from './token-dto';

import { CercaDto } from './cerca-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';
import { Observable, Subscription } from 'rxjs';
import { MemoriaCondivisaService } from '../memoria-condivisa-service';

@Component({
  selector: 'app-crudcolore',
  templateUrl: './crudcolore.component.html',
  styleUrls: ['./crudcolore.component.css']
})
export class CRUDColoreComponent implements OnInit {

  searchCriteria = "";
  aggiungiColore = "";
  listaColore: Colore[] = new Array ();
  readonly urlHost = "http://localhost:8080";
  mostraForm = false;

  constructor(private http: HttpClient, public memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }


  cerca() {
    let cercaDto = new CercaDto(this.searchCriteria, this.memoriaCondivisa.token);
    let listaColoreDto: ColoreDto [];
    let b: Observable<ColoreDto[]> =
      this.http.
        post<ColoreDto[]>(this.urlHost + "/cercaColore", cercaDto);
    let ss: Subscription = b.subscribe(
      c => listaColoreDto = c
    );
    this.searchCriteria = "";
    this.mostraForm = false;
  }

  cercaTutto() {
    let tokenDto = new TokenDto (this.memoriaCondivisa.token);
    let b: Observable<Colore[]> =
      this.http.
        post<Colore[]>(this.urlHost + "/cercaColore", tokenDto);
    let ss: Subscription = b.subscribe(
      c => this.listaColore = c
    );
    this.mostraForm = false;
  }

  aggiungi() {
    this.mostraForm = true;
  }

  conferma() {
    let criterioCerca = new CercaDto(this.aggiungiColore, this.memoriaCondivisa.token);
    let b: Observable<Colore> =
    this.http.post<Colore>(this.urlHost + "/aggiungiColore", criterioCerca);
    let ss: Subscription = b.subscribe(
      c => this.listaColore.push(c)
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
    this.http.post(this.urlHost + "/modificaColore", colore).subscribe({ error: e => console.error(e) });
  }
  
  rimuovi(colore: Colore) {
    console.log("\n\n" + colore.colore);
    this.http.post(this.urlHost + "/rimuoviColore", colore).subscribe({ error: e => console.error(e) });
    for (let i = 0; i < this.listaColore.length; i++) {
      if (this.listaColore[i].id == colore.id) {
        this.listaColore.splice(i,1);
      }
    }
  }
}