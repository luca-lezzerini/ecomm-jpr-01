import { Token } from './../token';
export class TokenDto {
    token: Token;

    constructor(token: Token) {
        this.token = token;
    }
}