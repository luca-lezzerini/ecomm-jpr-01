
package com.aula1.ecom.service;

import com.aula1.ecom.model.Colore;
import java.util.List;




public interface SrvColore {
    
    public List<Colore> cerca(String cerca);
    public List<Colore> mostraTutto();
//    public void aggiungi(Long id);
//    public void modifica(Long id);
//    public void rimuovi(Long id);
    public void aggiungiColore(Colore colore);

    public List<Colore> cancella(Long id);

    public List<Colore> modifica(Colore colore);

    public Colore creaColore(long id, String descrizione);

}
