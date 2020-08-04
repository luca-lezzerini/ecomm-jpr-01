export class Taglia {
    id: number;
    descrizione: string;
    sigla: string;
    constructor(id: number, descrizione: string, sigla: string) {
        this.id = id;
        this.descrizione = descrizione;
        this.sigla = sigla;
    }
}