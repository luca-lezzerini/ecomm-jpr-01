import { CercaDto } from './cerca-dto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-crudcolori',
  templateUrl: './crudcolori.component.html',
  styleUrls: ['./crudcolori.component.css']
})
export class CRUDColoriComponent implements OnInit {

  constructor(private http: HttpClient) { }
  searchCriteria: CercaDto;
  colore: string;
  listaColore: Colore [];
  url = "https://localhost:8080/";




  ngOnInit(): void {
  }


  cerca() {
    let colori: Colore[] = [];
    let b: Observable<any> =
    this.http.
    post<Colore []>(this.url + "cerca", this.searchCriteria);
    let ss: Subscription = b.subscribe(
    c=> colori = c
    );
    this.searchCriteria.cerca = "";
  }

  aggiungi() {
    this.http.post<any>("https://localhost:8080", this.searchCriteria);
    


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