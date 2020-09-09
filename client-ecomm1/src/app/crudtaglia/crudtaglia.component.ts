import { Token } from './../token';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Taglia } from './taglia';
import { Observable, Subscription } from 'rxjs';
import { ListaTaglieDto } from './ListaTaglieDto';
import { TokenDto } from './token-dto';
import { CercaDto } from './cerca-dto';

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


}




