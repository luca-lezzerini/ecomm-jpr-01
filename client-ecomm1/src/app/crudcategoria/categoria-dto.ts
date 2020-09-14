import { Categoria } from './categoria';
import { Token } from '../token';
export class CategoriaDto {
    categoria: Categoria = new Categoria(null, "");
    token: Token;
    paginaCorrente: number;
    numeroElementiXPagina: number = 25;
}
