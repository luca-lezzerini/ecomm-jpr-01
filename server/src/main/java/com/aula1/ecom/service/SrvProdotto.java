/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaProdottiDto;
import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author Niccolò Micozzi
 */
public interface SrvProdotto {

    List<Prodotto> listaProdotto();

    ListaProdottiDto creaListaProdottoDto(List<Prodotto> listaProdotto, Token t);

    public List<Prodotto> cercaProdotti(String cerca);

}
