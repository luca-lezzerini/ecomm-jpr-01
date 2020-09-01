import { Token } from './../token';
export class CercaDto {
    cerca = "";
    tokenAttuale: Token;
    constructor(criterioCerca: string, token: Token){
        this.cerca = criterioCerca;
        this.tokenAttuale = token;
    }
}