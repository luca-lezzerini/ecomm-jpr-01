import { Observable } from 'rxjs';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associazione-colore',
  templateUrl: './associa-spedizione.component.html',
  styleUrls: ['./associa-spedizione.component.css']
})
export class AssociaSpedizioneComponent implements OnInit {

  criterioRicerca = "";
  isShowRicerca: boolean = true;

  //listaProdotto: Prodotti[] = [];

  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {

  }

}
