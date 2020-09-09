/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Spedizione;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author gianmarco
 */
public class SpedizioneDto {

    private Spedizione spedizione;
    private List<Spedizione> lista;
    private Token token;

    public Spedizione getSpedizione() {
        return spedizione;
    }

    public void setSpedizione(Spedizione spedizione) {
        this.spedizione = spedizione;
    }

    public List<Spedizione> getLista() {
        return lista;
    }

    public void setLista(List<Spedizione> lista) {
        this.lista = lista;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "SpedizioneDto{" + "spedizione=" + spedizione + ", token=" + token + '}';
    }
    
}
