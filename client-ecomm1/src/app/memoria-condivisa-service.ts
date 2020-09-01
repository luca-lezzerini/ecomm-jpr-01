import { Injectable } from "@angular/core";
import { Token } from "./token";

@Injectable({
    providedIn: 'root'
})
export class MemoriaCondivisaService {

    token: Token;
    constructor() { }
}