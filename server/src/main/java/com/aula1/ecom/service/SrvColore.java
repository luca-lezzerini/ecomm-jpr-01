
package com.aula1.ecom.service;

import com.aula1.ecom.model.Colore;
import java.util.List;




public interface SrvColore {
    
    public List<Colore> cerca(String cerca);
    public List<Colore> cercaTutto();
//    public void aggiungi(Long id);
//    public void modifica(Long id);
//    public void rimuovi(Long id);
    public List<Colore> aggiungiColore(String dto);

    public List<Colore> cancella(Long id);

    public List<Colore> modifica(Colore colore);

}
