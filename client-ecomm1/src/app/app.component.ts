import { tagliaDto } from './crudtaglia/taglia-dto';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly urlHost = "http://localhost:8080";
  taglia = "";
  
  constructor(private http: HttpClient) { }
  title = 'client-ecomm1';
  
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
   
   tutteLeTaglie() {
    this.taglia = "";
      this.http.post<tagliaDto[]>(this.urlHost + "/tutteLeTaglie", this.taglia).subscribe(result => {
        console.log( result );
    });;
   }
}
