/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Colore;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author silvia
 */
public class ListaColoreDto {
    private List<Colore> listaColori;
    private Token token;

    public ListaColoreDto() {
    }

    public ListaColoreDto(List<Colore> listaColori, Token token) {
        this.listaColori = listaColori;
        this.token = token;
    }

    public List<Colore> getListaColori() {
        return listaColori;
    }

    public void setListaColori(List<Colore> listaColori) {
        this.listaColori = listaColori;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
    
    
    
}
