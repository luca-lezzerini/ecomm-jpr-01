/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author Niccolò Micozzi
 */
public class TagliaRispostaDto implements Tokenizabile {

    private Taglia taglia;
    private Token token;
    private List<Taglia> taglie;

    public TagliaRispostaDto(Taglia taglia) {
        this.taglia = taglia;
    }

    public TagliaRispostaDto() {
    }

    @Override
    public Token getToken() {
        return token;
    }

    @Override
    public void setToken(Token t) {
        token = t;
    }

    public Taglia getTaglia() {
        return taglia;
    }

    public void setTaglia(Taglia taglia) {
        this.taglia = taglia;
    }

    public List<Taglia> getTaglie() {
        return taglie;
    }

    public void setTaglie(List<Taglia> taglie) {
        this.taglie = taglie;
    }
}
