import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Taglia } from './taglia';
import { tagliaDto } from './taglia-dto';

@Component({
  selector: 'app-crudcolori',
  templateUrl: './crudtaglia.component.html',
  styleUrls: ['./crudtaglia.component.css']
})
export class CRUDTagliaComponent implements OnInit {


  
  searchCriteria: string;
  descrizioneTaglia: string;
  listaTaglia: Taglia [];
  taglia = "";
  readonly urlHost = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  

  ngOnInit(): void {
  }


 /** cerca() {

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


  }
  tagliaXS() {
    this.taglia = "XS";
      this.http.post(this.urlHost + "/tagliaXS", this.taglia).subscribe(result => {
        console.log( result );
    });
  }

  tagliaS() {
    this.taglia = "S";
      this.http.post(this.urlHost + "/tagliaS", this.taglia).subscribe(result => {
        console.log( result );
    });;
  }

  tagliaM() {
    this.taglia = "M";
      this.http.post(this.urlHost + "/tagliaM", this.taglia).subscribe(result => {
        console.log( result );
    });;
   }

  tagliaL() {
    this.taglia = "L";
      this.http.post(this.urlHost + "/tagliaL", this.taglia).subscribe(result => {
        console.log( result );
    });;
   }

   tagliaXL() {
    this.taglia = "XL";
      this.http.post(this.urlHost + "/tagliaXL", this.taglia).subscribe(result => {
        console.log( result );
    });;
   }
*/
   tutteLeTaglie() {
    this.taglia = "";
      this.http.post<Taglia[]>(this.urlHost + "/tutteLeTaglie", this.taglia).subscribe(result => {
        console.log( result );
    });;
   }
  }
