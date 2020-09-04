/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaTaglieDto;
import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.model.Token;
import com.aula1.ecom.repository.RepTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author skunex
 */
@Service
public class SrvTagliaImpl implements SrvTaglia {

    @Autowired
    RepTaglia repTaglia;



    @Override
    public void cancellaTaglia(Long id) {
       repTaglia.deleteById(id);
    }

    @Override
    public void modificaTaglia(Taglia taglia) {
       repTaglia.save(taglia); 
    }

    @Override
    public List<Taglia> listaTaglia() {
       return repTaglia.findAll();
    }

    @Override
    public ListaTaglieDto creaListaTaglia(List<Taglia> listaTaglie, Token t) {
        return new ListaTaglieDto(t, listaTaglie);
    }

    
}
