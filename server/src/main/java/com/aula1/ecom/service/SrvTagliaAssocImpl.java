package com.aula1.ecom.service;

import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.repository.RepProdotto;
import com.aula1.ecom.repository.RepTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SrvTagliaAssocImpl implements SrvTagliaAssoc {
    
    @Autowired
    RepTaglia repTaglia;
    
    @Autowired
    RepProdotto repProdotto;

    @Override
    public void associaTaglia(Prodotto prodotto, Taglia taglia) {
        //Creo l' associazione lato prodotto
        prodotto.setTaglia(taglia);
        prodotto = repProdotto.save(prodotto);
        //Creo l' associazione lato taglia
        List<Prodotto> lista = taglia.getProdotti();
        lista.add(prodotto);
        taglia = repTaglia.save(taglia);
    }

    @Override
    public void dissociaTaglia(Prodotto prodotto) {
        //Disassocio lato prodotto
        Taglia t = prodotto.getTaglia();
        prodotto.setTaglia(null);
        Prodotto pp = repProdotto.save(prodotto);
        //Disassocio lato taglia
        List<Prodotto> lista = t.getProdotti();
        lista.removeIf(p -> pp.getId().equals(p.getId()));
        t = repTaglia.save(t);
    }

}
