/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Categoria;
import java.util.List;

/**
 *
 * @author gianmarco
 */
public interface SrvCat {

    public Categoria creaCategoria(String dto);

    public List<Categoria> aggiungiCategoria(String dto);

    public List<Categoria> cancellaCategoria(Long id);

    public List<Categoria> modificaCategoria(Categoria categoria);

    public Categoria preparaModificaCategoria(Categoria categoria);

    public List<Categoria> listaCategoria();

    public List<Categoria> cercaCategoria(String descrizione);
}
