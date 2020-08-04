import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colore } from './colore';

@Component({
  selector: 'app-crudcolori',
  templateUrl: './crudcolori.component.html',
  styleUrls: ['./crudcolori.component.css']
})
export class CRUDColoriComponent implements OnInit {

  constructor(private http: HttpClientModule) { }
  searchCriteria: string;
  descrizioneColore: string;




  ngOnInit(): void {
  }


 /* cerca() {
    
     let a = new this.cerca();
    let b: Observable<Colore> =
    this.http.post<Colore>();
    let ss: Subscription = b.subscribe(
    c=> this.descrizioneColore = a.colore
    );
    }

  }

  aggiungi() {


  }

  conferma() {


  }

  annulla() {


  }

  modifica() {


  }

  rimuovi() {


  }*/}