/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Categoria;


/**
 *
 * @author gianmarco
 */
public interface SrvCat {

    public Categoria creaCategoria(Categoria dto);

    public Categoria aggiungiCategoria(Categoria categoria);

    public Categoria cancella(Long id);

    public Categoria modifica(Categoria categoria);
    
    public Categoria lista();
}
