
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

  searchCriteria: CercaDto;
  colore: Colore;
  listaColore: Colore[];
  url = "http://localhost:8080/";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  cerca() {
    console.log("\n\n\n\nsono nel cerca" + this.searchCriteria.cerca);
    let b: Observable<Colore[]> =
      this.http.
        post<Colore[]>(this.url + "cercaColore", JSON.stringify(this.searchCriteria));
    console.log("\n\n\n\nsono nel cerca \n\n\n\n");
    let ss: Subscription = b.subscribe(
      c => this.listaColore = c
    );
    console.log("\n\n\n\nsono nel cerca \n\n\n\n");
    this.searchCriteria.cerca = "";
    console.log("\n\n\n\nsono nel cerca \n\n\n\n");
  }

  aggiungi() {

  }

  conferma() {
    this.http.post(this.url + "aggiungiColore", this.colore);
  }

  annulla() {


  }

  modifica() {
    let b: Observable<Colore> =
      this.http.
        post<Colore>(this.url + "modificaColore", this.searchCriteria);
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
    this.http.post(this.url + "rimuoviColore", this.colore);
    for (let i = 0; i < this.listaColore.length; i++) {
      if (true) { }
    }
  }
}