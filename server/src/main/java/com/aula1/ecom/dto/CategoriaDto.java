package com.aula1.ecom.dto;

import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.model.Token;
import java.util.List;

public class CategoriaDto {

    @Deprecated
    private String stringa;
    @Deprecated
    private Long id;
    private Categoria categoria;
    private List<Categoria> lista;
    private Token token;

    public CategoriaDto() {
    }

    @Deprecated
    public String getStringa() {
        return stringa;
    }

    @Deprecated
    public void setStringa(String stringa) {
        this.stringa = stringa;
    }

    @Deprecated
    public Long getId() {
        return id;
    }

    @Deprecated
    public void setId(Long id) {
        this.id = id;
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
