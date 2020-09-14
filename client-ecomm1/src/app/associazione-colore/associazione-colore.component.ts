import { ColoreDto } from './../crudcolore/colore-dto';
import { ProdottoComponent } from './../prodotto/prodotto.component';
import { ListaProdottiDto } from './../prodotto/listaProdottiDto';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../prodotto/prodotto';
import { CercaDtoService } from '../cerca-dto-service';

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
    console.log("sono in cerca");
    ProdottoComponent.cerca (new CercaDtoService (this.criterioRicerca, this.memoriaCondivisa.token), this.http, this.memoriaCondivisa);
    console.log("ho fatto la ricerca");
    /*console.log(listaProdottiDto.listaProdotti[0].codice);
    this.listaProdotti = listaProdottiDto.listaProdotti;
    this.memoriaCondivisa.token = listaProdottiDto.token;*/
    console.log("ho assegnato i valori");
    /*let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    let b: Observable<ListaProdottiDto> =
      this.http.
        post<ListaProdottiDto>(this.urlHost + "/cercaColore", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaProdotti = c.listaProdotti;
        this.memoriaCondivisa.token = c.token;
      }
    );*/
  }

  associa (id: string){
    //this.http.post(this.urlHost + "/cercaColore", asociaColoreDto).subscribe({ error: e => console.error(e) });
  }

  selezione (id: string) {

  }
}
