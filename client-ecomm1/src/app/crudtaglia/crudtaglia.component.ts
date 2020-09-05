import { Token } from './../token';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Taglia } from './taglia';
import { Observable, Subscription } from 'rxjs';
import { ListaColoreDto } from '../crudcolore/lista-colore-dto';
import { ListaTaglieDto } from './ListaTaglieDto';
import { TokenDto } from './token-dto';

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

  listaTaglia: Taglia[] = new Array();
  

  rigaSelezionata: string;

  nuovaDescrizione: string;
  nuovaSigla: string;

  risultatoAgg: string = "";

  mostraForm = false;



  constructor(private http: HttpClient, public memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {

  }

mostraTaglie(){
  console.log("sono dentro");
  let tokenDto = new TokenDto (this.memoriaCondivisa.token);
  let b:Observable<ListaTaglieDto>=
  this.http.
  post<ListaTaglieDto>(this.urlHost + "/listaTaglia", tokenDto);
  console.log("ho fatto la chiamata al server");
  let ss: Subscription = b.subscribe(
    c => this.listaTaglia = c.listaTaglie
  );
  this.mostraForm = false;
  console.log("sono uscito dal metodo e sulla parte ts e tutto apposto");
}
  cerca() {
    let p = this.criterioRicerca;
     p = this.criterioRicerca ;
      let ox: Observable<Taglia[]> =
        this.http.post<Taglia[]>(this.urlHost + "/cercaTaglia", p);
      let ss: Subscription = ox.subscribe(
        r => this.listaTaglia = r);
        this.criterioRicerca = "";
    }
    
    
  }




