/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author gianmarco
 */
public class CategoriaDto {
    private String stringa;
    private Long lungo;
    private Categoria categoria;
    private List<Categoria> lista;
    private Token token;
    
    public CategoriaDto() {
    }

    public String getStringa() {
        return stringa;
    }

    public void setStringa(String stringa) {
        this.stringa = stringa;
    }

    public Long getLungo() {
        return lungo;
    }

    public void setLungo(Long lungo) {
        this.lungo = lungo;
    }

    public com.aula1.ecom.model.Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(com.aula1.ecom.model.Categoria categoria) {
        this.categoria = categoria;
    }

    public List getLista() {
        return lista;
    }

    public void setLista(List lista) {
        this.lista = lista;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
    
}
