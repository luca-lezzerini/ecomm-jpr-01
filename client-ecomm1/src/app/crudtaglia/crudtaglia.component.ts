import { Token } from './../token';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Taglia } from './taglia';
import { Observable, Subscription } from 'rxjs';
import { ListaTaglieDto } from './ListaTaglieDto';
import { TokenDto } from './token-dto';
import { CercaDto } from './cerca-dto';
import { TagliaDto } from './taglia-dto';

@Component({
  selector: 'app-crudtaglia',
  templateUrl: './crudtaglia.component.html',
  styleUrls: ['./crudtaglia.component.css']
})
export class CRUDTagliaComponent implements OnInit {

  readonly urlHost = "http://localhost:8080";

  criterioRicerca: string = "";

  aggiungiDescrizione: string = "";
  aggiungiSigla: string = "";
  aggiungiTaglia: string = "";

  listaTaglie: Taglia[] = new Array();


  rigaSelezionata: string;

  nuovaDescrizione: string;
  nuovaSigla: string;

  risultatoAgg: string = "";

  mostraForm = false;



  constructor(private http: HttpClient, public memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {

  }

  mostraTaglie() {
    console.log("sono dentro");
    let tokenDto = new TokenDto(this.memoriaCondivisa.token);
    let b: Observable<ListaTaglieDto> =
      this.http.
        post<ListaTaglieDto>(this.urlHost + "/listaTaglia", tokenDto);
    console.log("ho fatto la chiamata al server");
    let ss: Subscription = b.subscribe(
      c => {
        console.log("Ricevuto il DTO: ", c);
        this.listaTaglie = c.taglie;
      }
    );
    this.mostraForm = false;
    console.log("sono uscito dal metodo e sulla parte ts e tutto apposto");
  }

  cerca() {
    let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    let b: Observable<ListaTaglieDto> =
      this.http.
        post<ListaTaglieDto>(this.urlHost + "/cercaTaglia", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaTaglie = c.taglie;
        this.memoriaCondivisa.token = c.token;
      }
    );
    this.criterioRicerca = "";
    this.mostraForm = false;
  }

  aggiungi() {
    this.mostraForm = true;
  }

  conferma() {
    let nuovaTaglia = new CercaDto(this.aggiungiTaglia, this.memoriaCondivisa.token);
    let b: Observable<TagliaDto> =
      this.http.post<TagliaDto>(this.urlHost + "/aggiungiTaglia", nuovaTaglia);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaTaglie.push(c.taglia);
        this.memoriaCondivisa.token = c.token;
      }
    );
    this.mostraForm = false;
    this.aggiungiTaglia = "";
  }

  annulla() {
    this.mostraForm = false;
    this.aggiungiTaglia = "";
  }

  rimuovi(taglia: Taglia) {
    let tagliaDto = new TagliaDto(taglia, this.memoriaCondivisa.token);
    this.http.post(this.urlHost + "/rimuoviTaglia", tagliaDto).subscribe({ error: e => console.error(e) });
    for (let i = 0; i < this.listaTaglie.length; i++) {
      if (this.listaTaglie[i].id == taglia.id) {
        this.listaTaglie.splice(i, 1);
      }
    }
  }
}




