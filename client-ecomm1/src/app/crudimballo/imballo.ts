export class Imballo {
    id: number;
    descrizione: String;
    costo: number;
    

    constructor(_id:number,_descrizione:string,_costo:number){
        this.id=_id
        this.descrizione=_descrizione
        this.costo=_costo
    }
} 