/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Imballo;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author Niccolò Micozzi
 */
public class ListaImballiDto {
    private List<Imballo> listaImballi;
    private Token token;

    public ListaImballiDto() {
    }

    public ListaImballiDto(List<Imballo> listaImballi, Token token) {
        this.listaImballi = listaImballi;
        this.token = token;
    }

    public List<Imballo> getListaImballi() {
        return listaImballi;
    }

    public void setListaImballi(List<Imballo> listaImballi) {
        this.listaImballi = listaImballi;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
    
}
