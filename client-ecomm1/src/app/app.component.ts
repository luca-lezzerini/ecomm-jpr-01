import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  readonly urlHost = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }
  title = 'client-ecomm1';

  ngOnInit(): void {
  }
  HomePage(){
    this.router.navigateByUrl("/HomePage")
  }
  Anagrafiche(){
    this.router.navigateByUrl("/Anagrafiche");
  }
  carello(){
    this.router.navigateByUrl("/Carello");
  }

  crudColore(){
    this.router.navigateByUrl("/CRUDColore");
  }
  crudTaglia(){
    this.router.navigateByUrl("/CRUDTaglia");
  }
  crudCategoria(){
    this.router.navigateByUrl("/CRUDCategoria");
  }

}
