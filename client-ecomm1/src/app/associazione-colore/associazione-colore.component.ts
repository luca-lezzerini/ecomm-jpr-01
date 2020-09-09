import { Observable } from 'rxjs';
import { CercaDto } from './../crudtaglia/cerca-dto';
import { MemoriaCondivisaService } from './../memoria-condivisa-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associazione-colore',
  templateUrl: './associazione-colore.component.html',
  styleUrls: ['./associazione-colore.component.css']
})
export class AssociazioneColoreComponent implements OnInit {

  criterioRicerca = "";
  //listaProdotto
  constructor(private http: HttpClient, private memoriaCondivisa: MemoriaCondivisaService) { }

  ngOnInit(): void {
  }

  cerca() {
    /*let cercaDto = new CercaDto(this.criterioRicerca, this.memoriaCondivisa.token);
    let b: Observable<ListaProdottoDto> =
      this.http.
        post<ListaProdottoDto>(this.urlHost + "/cercaColore", cercaDto);
    let ss: Subscription = b.subscribe(
      c => {
        this.listaColore = c.listaColori;
        this.memoriaCondivisa.token = c.token;
      }*/
  }

}
