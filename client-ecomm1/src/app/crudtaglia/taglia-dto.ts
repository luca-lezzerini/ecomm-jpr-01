
import { Token } from './../token';
import { Taglia } from './taglia';
export class TagliaDto{
    Taglia: Taglia;
    Token: Token;
    constructor(Taglia: Taglia, Token: Token){
        this.Taglia = Taglia;
        this.Token = Token;

    }
}