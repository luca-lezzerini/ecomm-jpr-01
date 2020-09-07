import { Imballo } from './imballo';
import { Token } from './../token';
export class ImballoDto{
    Imballo: Imballo;
    Token: Token;
    constructor( Imballo: Imballo, Token: Token){
        this.Imballo = Imballo;
        this.Token = Token;
    }
}