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
import com.aula1.ecom.repository.RepSped;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author gianmarco
 */
@Service
public class SrvSpedizioneAssocImpl implements SrvSpedizioneAssoc {

    @Autowired
    RepProdotto repProdotto;
    @Autowired
    RepSped repSped;

    @Override
    public ProdottoDto associaSpedizione(SpedizioneDto spedizioneDto, ProdottoDto prodottoDto) {
        //Aggiorno la relazione sul lato prodotto
        Prodotto p = prodottoDto.getProdotto();
        Spedizione s = spedizioneDto.getSpedizione();
        p.setSpedizione(s);
        p = repProdotto.save(p);

        //Aggiorno la relazione sul lato spedizione
        List<Prodotto> listaProdotti = s.getProdotti();
        listaProdotti.add(p);
        s = repSped.save(s);

        prodottoDto.setLista(repProdotto.findAll());

        return prodottoDto;
    }

    @Override
    public ProdottoDto deAssociaSpedizione(ProdottoDto prodottoDto) {
        //Rimuovo l'associazione lato prodotto
        Prodotto p = prodottoDto.getProdotto();
        Spedizione s = p.getSpedizione();
        p.setSpedizione(null);

        //Rimuovo L'associzione lato spedizione
        List<Prodotto> listaProdotti = s.getProdotti();
        listaProdotti.removeIf(
                prod
                -> prod.getId().equals(p.getId()));

        prodottoDto.setLista(repProdotto.findAll());
        return prodottoDto;
    }

}
