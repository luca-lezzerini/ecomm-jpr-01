
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

  searchCriteria: string;
  colore: Colore;
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
  }

  cercaTutto() {
    let b: Observable<Colore[]> =
      this.http.
        get<Colore[]>(this.urlHost + "/cercaTuttiColori");
    let ss: Subscription = b.subscribe(
      c => this.listaColore = c
    );
  }

  aggiungi() {
    this.mostraForm = true;
  }

  conferma() {
    this.http.post(this.urlHost + "/aggiungiColore", this.colore);
    this.mostraForm = false;
    this.colore.colore = "";
  }

  annulla() {
    this.mostraForm = false;
    this.colore.colore = "";
  }

  modifica() {
    let b: Observable<Colore> =
      this.http.
        post<Colore>(this.urlHost + "/modificaColore", this.searchCriteria);
    let ss: Subscription = b.subscribe(
      coloreModificato => this.listaColore.forEach(elementoDaModificare => {
        if (elementoDaModificare.id == coloreModificato.id) {
          elementoDaModificare.colore = coloreModificato.colore;
        }
      }
      )
    );
  }

  rimuovi() {
    let esito: boolean;
    this.http.post(this.urlHost + "/rimuoviColore", this.colore);
    for (let i = 0; i < this.listaColore.length; i++) {
      if (true) { }
    }
  }
}