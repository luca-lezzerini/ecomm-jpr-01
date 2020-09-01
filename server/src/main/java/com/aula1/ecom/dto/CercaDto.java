/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Token;

/**
 *
 * @author Prisacar
 *
 * La classe è composta solo dalla stringa cerca con metodi get e set, il
 * costruttore col parametro cerca e quello senza parametri la classe serve solo
 * per intercettare ricerche basate su stringa dal client
 *
 */
public class CercaDto implements Tokenizabile {

    private String cerca;
    private Token token;

    public CercaDto() {
    }

    public CercaDto(String cerca, Token token) {
        this.cerca = cerca;
        this.token = token;
    }

    
    
    public String getCerca() {
        return cerca;
    }

    public void setCerca(String cerca) {
        this.cerca = cerca;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }

}
