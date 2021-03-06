import { Observable, Subscription } from 'rxjs';
import { ListaProdottiDto } from './listaProdottiDto';
import { CercaDtoService } from '../cerca-dto-service';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  static readonly urlHost = "http://localhost:8080";

  constructor(private http: HttpClient, public memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  static cerca(cerca: CercaDtoService, http: HttpClient): ListaProdottiDto {
    let listaProdotti = new ListaProdottiDto;
    let b: Observable<ListaProdottiDto> =
      http.
        post<ListaProdottiDto>(this.urlHost + "/cercaProdotti", cerca);
    let ss: Subscription = b.subscribe(
      c => {
        /*console.log(c.listaProdotti[0].codice + "  sono dentro alla lambda");
        console.log(c.listaProdotti[1].codice + "  sono dentro alla lambda");*/
        console.log("Prima dell'asssegnazione:  lista prodotti = " + c.listaProdotti);
        console.log("Il token vale: " + c.token.token);
        listaProdotti = c;
        console.log("Dopo l'asssegnazione:  lista prodotti = " + listaProdotti.listaProdotti);
      }
    );
    console.log (listaProdotti.listaProdotti + "  sono dentro al prodotto component fuori dalla lambda");
    return listaProdotti;
  }
  
}
