/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaProdottoDto;
import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Token;
import com.aula1.ecom.repository.RepProdotto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Niccolò Micozzi
 */
@Service
public class SrvProdottoImpl implements SrvProdotto {

    @Autowired
    RepProdotto repProdotto;

    @Override
    public List<Prodotto> listaProdotto() {
        return repProdotto.findAll();
    }

    @Override
    public ListaProdottoDto creaListaProdottoDto(List<Prodotto> listaProdotto, Token t) {
        return new ListaProdottoDto(listaProdotto, t);
    }

}
