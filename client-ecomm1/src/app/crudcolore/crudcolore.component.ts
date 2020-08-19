
import { CercaDto } from './cerca-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-crudcolore',
  templateUrl: './crudcolore.component.html',
  styleUrls: ['./crudcolore.component.css']
})
export class CRUDColoreComponent implements OnInit {

  searchCriteria = "";
  colore: Colore = new Colore;
  listaColore: Colore[];
  readonly urlHost = "http://localhost:8080";
  mostraForm = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  cerca() {
    let criterioCerca = new CercaDto(this.searchCriteria);
    let b: Observable<Colore[]> =
      this.http.
        post<Colore[]>(this.urlHost + "/cercaColore", criterioCerca);
    let ss: Subscription = b.subscribe(
      c => this.listaColore = c
    );
    this.searchCriteria = "";
    this.mostraForm = false;
  }

  cercaTutto() {
    let b: Observable<Colore[]> =
      this.http.
        get<Colore[]>(this.urlHost + "/mostraTuttiColori");
    let ss: Subscription = b.subscribe(
      c => this.listaColore = c
    );
    this.mostraForm = false;
  }

  aggiungi() {
    this.mostraForm = true;
  }

  conferma() {
    let b: Observable<Colore> =
    this.http.post<Colore>(this.urlHost + "/aggiungiColore", this.colore.colore);
    let ss: Subscription = b.subscribe(
      c => this.listaColore.push(c)
    );
    this.mostraForm = false;
    this.colore.colore = "";
  }

  annulla() {
    this.mostraForm = false;
    this.colore.colore = "";
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