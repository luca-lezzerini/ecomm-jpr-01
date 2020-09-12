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
    private Long numeroTotaleElementi;
    private Integer numeroTotalePagine;
    private Integer paginaCorrente;
    private Integer numeroElementiXPagina = 25;

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

    public Categoria getCategoria() {
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

    public Long getNumeroTotaleElementi() {
        return numeroTotaleElementi;
    }

    public void setNumeroTotaleElementi(Long numeroTotaleElementi) {
        this.numeroTotaleElementi = numeroTotaleElementi;
    }

    public Integer getNumeroTotalePagine() {
        return numeroTotalePagine;
    }

    public void setNumeroTotalePagine(Integer numeroTotalePagine) {
        this.numeroTotalePagine = numeroTotalePagine;
    }

    public Integer getPaginaCorrente() {
        return paginaCorrente;
    }

    public void setPaginaCorrente(Integer paginaCorrente) {
        this.paginaCorrente = paginaCorrente;
    }

    public Integer getNumeroElementiXPagina() {
        return numeroElementiXPagina;
    }

    public void setNumeroElementiXPagina(Integer numeroElementiXPagina) {
        this.numeroElementiXPagina = numeroElementiXPagina;
    }

    @Override
    public String toString() {
        return "CategoriaDto{" + "stringa=" + stringa + ", id=" + id + ", categoria=" + categoria + ", lista=" + lista + ", token=" + token + ", numeroTotaleElementi=" + numeroTotaleElementi + ", numeroTotalePagine=" + numeroTotalePagine + ", paginaCorrente=" + paginaCorrente + ", numeroElementiXPagina=" + numeroElementiXPagina + '}';
    }

}
