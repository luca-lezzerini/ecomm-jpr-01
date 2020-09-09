/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.dto.ProdottoDto;
import com.aula1.ecom.dto.SpedizioneDto;
import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Spedizione;
import com.aula1.ecom.repository.RepProdotto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author gianmarco
 */
@Service
public class SrvSpedizioneAssocImpl implements SrvSpedizioneAssoc{
    @Autowired
    RepProdotto repProdotto;
    

//    @Override
//    public ProdottoDto associaSpedizione(Spedizione spedizione, Prodotto prodotto) {
//     //   prodotto.setSpedizione(spedizione);
//        repProdotto.save(prodotto);
//        List<Prodotto> lista = repProdotto.findAll();
//      //  prodotto.setLista(lista);
//      
//        return prodotto;
//    }
//
//    @Override
//    public ProdottoDto deAssociaSpedizione(SpedizioneDto spedizione) {
//        Prodotto prodotto=new Prodotto();
//        //   prodotto.setSpedizione(null);
//        repProdotto.save(prodotto);
//        List<Prodotto> lista = repProdotto.findAll();
//      //  prodotto.setLista(lista);
//        return prodotto;
//    }
    

}
