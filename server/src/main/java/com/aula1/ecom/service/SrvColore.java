
package com.aula1.ecom.service;

import java.util.List;

/**
 *
 * @author aless
 */
public interface SrvColore {
    
    public List<ColoreDto> coloreTipo();
    public void aggiungi(Long id);
    public void modifica(Long id);
    public void rimuovi(Long id);
}
