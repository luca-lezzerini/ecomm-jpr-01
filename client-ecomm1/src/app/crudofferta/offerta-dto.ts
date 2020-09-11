import { Offerta } from './offerta';
import { Token } from '../token';
export class SpedizioneDto {
    offerta: Offerta;
    token: Token;
    constructor(offerta: Offerta, token: Token){
        this.offerta = offerta;
        this.token = token;
    }
}
