package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaImballiDto;
import com.aula1.ecom.model.Imballo;
import com.aula1.ecom.model.Token;
import com.aula1.ecom.repository.RepImballaggio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SrvImballoImpl implements SrvImballo {

    @Autowired
    RepImballaggio repImballaggio;

    @Override
    public Imballo cercaImballo(Long id) {
        return repImballaggio.getOne(id);
    }

    @Override
    public List<Imballo> ricercaPerCostoEDescrizione(String descrizione, Double costo) {
        return repImballaggio.findByDescrizioneAndCosto(descrizione, costo);
    }

    @Override
    public List<Imballo> ricercaPerCosto(Double costo) {
        return repImballaggio.findByCostoLessThan(costo);
    }

    @Override
    public void aggiungiImballo(Imballo imballo) {
        repImballaggio.save(imballo);
    }

    @Override
    public Imballo creaImballo(Long id, String descrizione, Double costo) {
        return new Imballo(id, descrizione, costo);
    }

    @Override
    public List<Imballo> listaImballi() {
        return repImballaggio.findAll();
    }

    @Override
    public ListaImballiDto creaListaImballi(List<Imballo> listaImballi, Token t) {
        return new ListaImballiDto(listaImballi, t);
    }

    @Override
    public ListaImballiDto creaListaImballiDto(List<Imballo> listaImballi, Token t) {
        System.out.println("sono nel service di imballo");
        return new ListaImballiDto(listaImballi, t);

    }

    @Override
    public List<Imballo> cerca(String cerca) {
        if (cerca.equals("")) {
            return repImballaggio.findByDescrizione(cerca);
        } else {
            return repImballaggio.findByDescrizioneLike("%" + cerca + "%");               //Comando suggerito da Lezerini sempre nella issue #33 con le percentuali
        }
    }

    @Override
    public void rimuoviImballo(Long id) {
     repImballaggio.deleteById(id);  
    }

}
