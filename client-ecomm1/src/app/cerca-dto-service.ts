import { Token } from './token';
export class CercaDtoService {
    cerca: string;
    token: Token;
    constructor(criterioCerca: string, token: Token){
        this.cerca = criterioCerca;
        this.token = token;
    }
}