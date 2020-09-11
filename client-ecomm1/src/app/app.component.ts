import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly urlHost = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }
  title = 'client-ecomm1';

  ngOnInit(): void {
  }
  HomePage() {
    this.router.navigateByUrl("/HomePage")
  }
  crudAnagrafiche() {
    this.router.navigateByUrl("/CRUDAnagrafiche");
  }
  crudCarello() {
    this.router.navigateByUrl("/CRUDCarello");
  }

  crudColore() {
    console.log("sono nel colore");
    this.router.navigateByUrl("/CRUDColore");

  }
  crudTaglia() {
    this.router.navigateByUrl("/CRUDTaglia");
  }
  crudCategoria() {
    this.router.navigateByUrl("/CRUDCategoria");

  }
  crudSpedizioni() {
    this.router.navigateByUrl("/CRUDSpedizioni");
  }
  crudImballo() {
    this.router.navigateByUrl("/CRUDImballo");
  }
  crudOfferta() {
    this.router.navigateByUrl("/CRUDOfferta");
  }
  associazioneColore() {
    this.router.navigateByUrl("/AssociazioneColore");
  }
  associazioneTaglia() {
    
  }
  associazioneCategoria() {

  }
  associazioneSpedizioni() {
    this.router.navigateByUrl("/AssociaSpedizione");
  }
  associazioneImballo() {

  }
  associazioneOfferta() {
    this.router.navigateByUrl("/AssociaOfferta");
  }
}
