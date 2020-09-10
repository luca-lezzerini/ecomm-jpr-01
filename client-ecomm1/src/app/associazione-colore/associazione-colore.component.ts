import { Observable, Subscription } from 'rxjs';
import { CercaDto } from './../crudtaglia/cerca-dto';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListaProdottiDto } from '../prodotto/listaProdottiDto';
import { Prodotto } from '../prodotto/prodotto';

@Component({
  selector: 'app-associazione-colore',
  templateUrl: './associazione-colore.component.html',
  styleUrls: ['./associazione-colore.component.css']
})
export class AssociazioneColoreComponent implements OnInit {

  criterioRicerca = "";
  readonly urlHost = "http://localhost:8080";
  listaProdotti: Prodotto [];

  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {
    let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    let b: Observable<ListaProdottiDto> =
      this.http.
        post<ListaProdottiDto>(this.urlHost + "/cercaColore", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaProdotti = c.listaProdotti;
        this.memoriaCondivisa.token = c.token;
      }
    );
  }

}
