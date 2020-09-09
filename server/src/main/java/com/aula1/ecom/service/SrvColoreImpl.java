package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaColoreDto;
import com.aula1.ecom.dto.ColoreDto;
import com.aula1.ecom.model.Colore;
import com.aula1.ecom.model.Token;
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
        if (cerca.equals("")) {
            return repColore.findByColore(cerca);
        } else {
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
    public void modificaColore(Colore colore) {
        repColore.save(colore);
    }

    @Override
    public Colore creaColore(long id, String descrizione) {
        return new Colore(id, descrizione);
    }

    @Override
    public void rimuoviColore(Long id) {
        repColore.deleteById(id);
    }

    @Override
    public ListaColoreDto creaListaColoreDto(List<Colore> listaColori, Token t) {

        return new ListaColoreDto(listaColori, t);
    }

    @Override
    public ColoreDto creaListaColoreDto(Colore colore, Token t) {
        return new ColoreDto(colore, t);
    }

}
