import { TokenDto } from './../crudtaglia/token-dto';
import { Prodotto } from './../prodotto/prodotto';
import { ListaProdottiDto } from './../prodotto/listaProdottiDto';
import { CercaDto } from './../crudcolore/cerca-dto';
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

  ListaProdottiDto: Prodotto[];
  listaProdotti: Prodotto[] = new Array();

  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {
    console.log("sono dentro");
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

}
