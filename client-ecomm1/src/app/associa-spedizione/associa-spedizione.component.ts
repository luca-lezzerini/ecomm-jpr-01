import { CercaDto } from './../crudtaglia/cerca-dto';
import { Spedizioni } from './../crudspedizioni/spedizioni';
import { TokenDto } from './../crudtaglia/token-dto';
import { Prodotto } from './../prodotto/prodotto';
import { ListaProdottiDto } from './../prodotto/listaProdottiDto';
import { Observable, Subscription } from 'rxjs';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associazione-colore',
  templateUrl: './associa-spedizione.component.html',
  styleUrls: ['./associa-spedizione.component.css']
})
export class AssociaSpedizioneComponent implements OnInit {

  readonly urlHost = "http://localhost:8080";
  criterioRicerca = "";

  isShowRicerca: boolean = true;
  isShowProdotto: boolean = false;
  isShowTabellaProdotti: boolean = false;
  isShowTabellaAssociativa: boolean = false;

  ListaProdottiDto: Prodotto[];
  listaProdotti: Prodotto[] = new Array();
  listaSpedizioni: Spedizioni[] = [];

  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {
    let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    if (cercaDto) {
      console.log("Sono all'interno del metodo cerca prodotti con parametri di ricerca");
      let b: Observable<ListaProdottiDto> =
        this.http.
          post<ListaProdottiDto>(this.urlHost + "/cercaProdotti", cercaDto);
      console.log("ho fatto la chiamata al server");
      let ss: Subscription = b.subscribe(
        c => {
          console.log("Ricevuto il DTO: ", c);
          this.listaProdotti = c.listaProdotti;
          this.memoriaCondivisa.token = c.token;
        }
      );
    } else {
      console.log("sono all'interno del metodo cerca tutti i prodotti");
      let tokenDto = new TokenDto(this.memoriaCondivisa.token);
      let b: Observable<ListaProdottiDto> =
        this.http.
          post<ListaProdottiDto>(this.urlHost + "/listaProdotto", tokenDto);
      console.log("ho fatto la chiamata al server");
      let ss: Subscription = b.subscribe(
        c => {
          console.log("Ricevuto il DTO: ", c);
          this.listaProdotti = c.listaProdotti;
        }
      );
    }
    this.isShowTabellaProdotti = true;
    this.isShowRicerca = true;
    this.isShowProdotto = false;
    this.isShowProdotto = false;
    this.criterioRicerca = "";
  }

  seleziona() {
    //inserire metodo
    this.isShowTabellaProdotti = false;
    this.isShowRicerca = false;
    this.isShowProdotto = true;
    this.isShowTabellaAssociativa = true;
  }

  associa() {
    //inserire metodo
    this.isShowTabellaProdotti = false;
    this.isShowRicerca = true;
    this.isShowProdotto = false;
    this.isShowTabellaAssociativa = false;
  }
}
