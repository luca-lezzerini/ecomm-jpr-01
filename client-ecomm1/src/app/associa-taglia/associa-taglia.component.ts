import { ProdottoComponent } from './../prodotto/prodotto.component';
import { ListaProdottiDto } from './../prodotto/listaProdottiDto';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto/prodotto';
import { CercaDtoService } from '../cerca-dto-service';

@Component({
  selector: 'app-associa-taglia',
  templateUrl: './associa-taglia.component.html',
  styleUrls: ['./associa-taglia.component.css']
})
export class AssociaTagliaComponent implements OnInit {

  criterioRicerca = "";
  readonly urlHost = "http://localhost:8080";
  listaProdotti: Prodotto [];

  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {
    console.log("sono in cerca");
    let listaProdottiDto: ListaProdottiDto;
    listaProdottiDto = ProdottoComponent.cerca (new CercaDtoService (this.criterioRicerca, this.memoriaCondivisa.token), this.http);
    console.log("ho fatto la ricerca");
    console.log(listaProdottiDto.listaProdotti[0].codice);
    this.listaProdotti = listaProdottiDto.listaProdotti;
    this.memoriaCondivisa.token = listaProdottiDto.token;
    console.log("ho assegnato i valori");
    /*let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    let b: Observable<ListaProdottiDto> =
      this.http.
        post<ListaProdottiDto>(this.urlHost + "/listaProdotto", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaProdotti = c.listaProdotti;
        this.memoriaCondivisa.token = c.token;
      }
    );*/
  }

}
