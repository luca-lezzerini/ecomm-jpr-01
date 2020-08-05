import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-crudcolori',
  templateUrl: './crudcolori.component.html',
  styleUrls: ['./crudcolori.component.css']
})
export class CRUDColoriComponent implements OnInit {

  constructor(private http: HttpClientModule) { }
  searchCriteria: string;
  descrizioneColore: string;
  listaColore: Colore [];




  ngOnInit(): void {
  }


  cerca() {
    let colori: Colore[];
    let b: Observable<Colore[]> =
    this.http.
    get<Colore[]>("https://localhost:8080");
    let ss: Subscription = b.subscribe(
    c=> colori = c
    );
  }

  aggiungi() {


  }

  conferma() {


  }

  annulla() {


  }

  modifica() {


  }

  rimuovi() {


  }
}