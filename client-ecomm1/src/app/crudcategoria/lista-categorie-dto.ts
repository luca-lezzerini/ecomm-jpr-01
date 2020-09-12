import { Token } from './../token';
import { Categoria } from './categoria';
export class ListaCategorieDto {
    lista: Categoria[];
    token: Token;
    numeroTotaleElementi: number;
    numeroTotalePagine: number;
    paginaCorrente: number;
}