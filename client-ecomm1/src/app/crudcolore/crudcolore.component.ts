
import { CercaDto } from './cerca-dto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-crudcolore',
  templateUrl: './crudcolore.component.html',
  styleUrls: ['./crudcolore.component.css']
})
export class CRUDColoreComponent implements OnInit {

  constructor(private http: HttpClient) { }
  searchCriteria: CercaDto;
  colore: Colore;
  listaColore: Colore[];
  url = "https://localhost:8080/";




  ngOnInit(): void {
  }


  cerca() {
    let b: Observable<Colore[]> =
      this.http.
        post<Colore[]>(this.url + "cerca", this.searchCriteria);
    let ss: Subscription = b.subscribe(
      c => this.listaColore = c
    );
    this.searchCriteria.cerca = "";
  }

  aggiungi() {

  }

  conferma() {
    this.http.post(this.url + "aggiungi", this.colore);
  }

  annulla() {


  }

  modifica() {
    let b: Observable<Colore> =
      this.http.
        post<Colore>(this.url + "cerca", this.searchCriteria);
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
    this.http.post(this.url + "rimuovi", this.colore);
    for (let i = 0; i < this.listaColore.length; i++){
      if (true){}
    }
  }
}