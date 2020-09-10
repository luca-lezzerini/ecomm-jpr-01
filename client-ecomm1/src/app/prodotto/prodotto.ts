import { CercaDtoService } from '../cerca-dto-service';
import { HttpClient } from '@angular/common/http';
import { ListaProdottiDto } from './listaProdottiDto';
import { Observable, Subscription } from 'rxjs';
export class Prodotto {
  id: string;
  codice: string;
  descrizione: string
  peso: string;
  prezzo: string;
  taglia: string;
  imballo: string;
  colore: string;
  offerta: string;
  spedizione: string;
  categoria: string;
}