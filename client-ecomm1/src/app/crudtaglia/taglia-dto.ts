
import { Token } from './../token';
import { Taglia } from './taglia';
export class TagliaDto{
    taglia: Taglia;
    token: Token;
    constructor(taglia: Taglia, token: Token){
        this.taglia = taglia;
        this.token = token;

    }
}