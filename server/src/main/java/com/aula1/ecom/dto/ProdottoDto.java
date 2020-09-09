/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Token;

/**
 *
 * @author Kevin
 */
public class ProdottoDto {
    private Prodotto prodotto;
    private Token token;
    
    //COSTRUTTORI

    public ProdottoDto() {
    }

    public ProdottoDto(Prodotto prodotto, Token token) {
        this.prodotto = prodotto;
        this.token = token;
    }
    
    //METODI GET AND SETTER

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
}
