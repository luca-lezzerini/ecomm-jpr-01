/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaTaglieDto;
import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.model.Token;
import java.util.List;

/**
 *
 * @author skunex
 */
public interface SrvTaglia {

    List<Taglia> listaTaglie();

    void cancellaTaglia(Long id);

    void modificaTaglia(Taglia taglia);

    ListaTaglieDto creaListaTaglieDto(List<Taglia> listaTaglie, Token t);

    public List<Taglia> cerca(String cerca);

}
