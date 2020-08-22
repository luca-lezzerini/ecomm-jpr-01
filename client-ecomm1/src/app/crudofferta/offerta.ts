export class Offerta {
  id: number;
  codice: string;
  descrizione: string;
  scontoPercentuale: number;

 constructor(_id:number,_codice:string,_descrizione:string,_scontoPercentuale:number){
    this.id=_id
    this.codice=_codice
    this.descrizione=_descrizione
    this.scontoPercentuale=_scontoPercentuale
  }

}
