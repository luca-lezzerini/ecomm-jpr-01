/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Categoria;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author gianmarco
 */
public interface SrvCat {

    public Categoria creaCategoria(String stringa);

    public List<Categoria> aggiungiCategoria(String stringa);

    public List<Categoria> cancellaCategoria(Long id);

    public List<Categoria> modificaCategoria(Categoria categoria);

    public Categoria preparaModificaCategoria(Categoria categoria);

    public List<Categoria> listaCategoria();

    public Page<Categoria> listaCategoria(Pageable p);

    public List<Categoria> cercaCategoria(String descrizione);

    public Page<Categoria> cercaCategoriaPaginato(String descrizione, Pageable p);
}
