export class Spedizioni {
  id: number;
  codice: string;
  nome: string;
  prezzoKg: number;
 constructor(_id:number,_codice:string,_nome:string,_prezzoKg:number){
    this.id=_id
    this.codice=_codice
    this.nome=_nome
    this.prezzoKg=_prezzoKg
  }

}
