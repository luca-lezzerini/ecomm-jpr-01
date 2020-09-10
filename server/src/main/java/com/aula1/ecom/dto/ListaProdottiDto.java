/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author Niccolò Micozzi
 */
public class ListaProdottiDto {

    private List<Prodotto> listaProdotti;
    private Token token;

    public ListaProdottiDto() {
    }

    public ListaProdottiDto(List<Prodotto> prodotto, Token token) {
        this.listaProdotti = prodotto;
        this.token = token;
    }

    public List<Prodotto> getListaProdotti() {
        return listaProdotti;
    }

    public void setListaProdotti(List<Prodotto> listaProdotti) {
        this.listaProdotti = listaProdotti;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

}
