import { Prodotto } from './prodotto/prodotto';
import { Injectable } from "@angular/core";
import { Token } from "./token";

@Injectable({
    providedIn: 'root'
})
export class MemoriaCondivisaService {

    token: Token;
    listaProdotti: Prodotto [];
    
    constructor() { }
}