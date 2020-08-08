package com.aula1.ecom.service;

import com.aula1.ecom.model.Colore;
import com.aula1.ecom.repository.RepColore;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author aless
 */
@Service
public class SrvColoreImpl implements SrvColore {

    @Autowired
    RepColore repColore;

    //Prisacar
    @Override
    public List<Colore> cerca(String cerca) {
        return repColore.findByColoreLike(cerca);                               //Comando suggerito da Lezerini sempre nella issue #33
    }

    @Override
    public List<Colore> aggiungiColore(String dto) {
        repColore.save(dto);
        return null;
        
    }

    @Override
    public List<Colore> cancella(Long id) {
        repColore.deleteById(id);
     return null;   
    }
        

    @Override
    public List<Colore> modifica(Colore colore) {
        repColore.save(colore);
       return null;
    }
    
}
    
        
        
    
