import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Taglia } from './taglia';

@Component({
  selector: 'app-crudcolori',
  templateUrl: './crudtaglia.component.html',
  styleUrls: ['./crudtaglia.component.css']
})
export class CRUDTagliaComponent implements OnInit {

  constructor(private http: HttpClientModule) { }
  searchCriteria: string;
  descrizioneTaglia: string;
  listaTaglia: Taglia [];




  ngOnInit(): void {
  }


 /* cerca() {
    
     let a = new this.cerca();
    let b: Observable<Taglia> =
    this.http.post<Taglia>();
    let ss: Subscription = b.subscribe(
    c=> this.descrizioneTaglia = a.taglia
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


  }*/
}