import { Token } from '../token';
import { Prodotto } from "./prodotto";

export class ListaProdottiDto {
    listaProdotti: Prodotto [];
    token: Token;
}