import { Spedizioni } from './spedizioni';
import { Token } from '../token';
export class SpedizioneDto {
    spedizione: Spedizioni;
    token: Token;
    constructor(spedizione: Spedizioni, token: Token){
        this.spedizione = spedizione;
        this.token = token;
    }
}
