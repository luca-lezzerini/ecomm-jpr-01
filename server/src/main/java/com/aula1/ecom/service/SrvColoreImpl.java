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
        if (cerca.equals("")){
            return repColore.findByColore(cerca);
        }else{
            return repColore.findByColoreLike("%" + cerca + "%");               //Comando suggerito da Lezerini sempre nella issue #33 con le percentuali
        }
    }
    
    @Override
    public List<Colore> mostraTutto() {
        return repColore.findAll();
    }

    @Override
    public void aggiungiColore(Colore colore) {
        repColore.save(colore);
        
    }
        

    @Override
    public List<Colore> modifica(Colore colore) {
        repColore.save(colore);
       return null;
    }

    @Override
    public Colore creaColore(long id, String descrizione) {
        return new Colore(id, descrizione);
    }

    @Override
    public void rimuoviColore(Long id) {
        repColore.deleteById(id);
    }
    
}
    
        
        
    
