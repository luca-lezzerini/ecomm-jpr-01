import { Colore } from './colore';
import { Token } from '../token';
export class ColoreDto {
    colore: Colore;
    token: Token;
    constructor(colore: Colore, token: Token){
        this.colore = colore;
        this.token = token;
    }
} 