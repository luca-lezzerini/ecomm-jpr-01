/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.model.Token;
import java.util.List;

public class ListaTaglieDto implements Tokenizabile {

    private Token token;
    private List<Taglia> taglie;

    public ListaTaglieDto() {
    }

    public ListaTaglieDto(Token token, List<Taglia> taglie) {
        this.token = token;
        this.taglie = taglie;
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }

    public List<Taglia> getTaglie() {
        return taglie;
    }

    public void setTaglie(List<Taglia> taglie) {
        this.taglie = taglie;
    }
}
