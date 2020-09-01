/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Colore;
import com.aula1.ecom.model.Token;

/**
 *
 * @author silvia
 */
public class ColoreDto {
    
    private Colore colore;
    private Token token;

    public ColoreDto() {
    }

    public ColoreDto(Colore colore, Token token) {
        this.colore = colore;
        this.token = token;
    }

    public Colore getColore() {
        return colore;
    }

    public void setColore(Colore colore) {
        this.colore = colore;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
    
    
}
