package com.aula1.ecom.dto;

import com.aula1.ecom.model.Imballo;
import com.aula1.ecom.model.Token;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Niccolò Micozzi
 */
public class ImballoDto {
    private Imballo imballo;
    private Token token;

    public ImballoDto() {
    }

    public ImballoDto(Imballo imballo, Token token) {
        this.imballo = imballo;
        this.token = token;
    }

    public ImballoDto(Imballo imballo) {
        this.imballo = imballo;
    }

    public Imballo getImballo() {
        return imballo;
    }

    public void setImballo(Imballo imballo) {
        this.imballo = imballo;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
}
