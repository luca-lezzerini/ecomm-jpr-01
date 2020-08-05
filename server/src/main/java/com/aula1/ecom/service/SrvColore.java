
package com.aula1.ecom.service;

import com.aula1.ecom.model.Colore;
import java.util.List;

/**
 *
 * @author aless
 */
public interface SrvColore {
    
    public List<Colore> coloreTipo();
    public void aggiungi(Long id);
    public void modifica(Long id);
    public void rimuovi(Long id);
}
