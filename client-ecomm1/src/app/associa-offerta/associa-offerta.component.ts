import { Observable } from 'rxjs';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associazione-colore',
  templateUrl: './associa-offerta.component.html',
  styleUrls: ['./associa-offerta.component.css']
})
export class AssociaOffertaComponent implements OnInit {

  criterioRicerca = "";

  //listaProdotto: Prodotti[] = [];

  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {

  }

}
