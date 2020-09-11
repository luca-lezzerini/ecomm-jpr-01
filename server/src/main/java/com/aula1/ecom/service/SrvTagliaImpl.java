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
    public List<Taglia> listaTaglie() {
        System.out.println("sono nel metodo lista taglia find all");
        return repTaglia.findAll();
    }

    @Override
    public ListaTaglieDto creaListaTaglieDto(List<Taglia> listaTaglie, Token t) {
        System.out.println("sono nel service di taglia");
        return new ListaTaglieDto(listaTaglie, t);
    }

    @Override
    public List<Taglia> cerca(String cerca) {
        if (cerca.equals("")) {
            return repTaglia.findBySigla(cerca);
        } else {
            return repTaglia.findBySiglaLike("%" + cerca + "%");               //Comando suggerito da Lezerini sempre nella issue #33 con le percentuali
        }
    }

    @Override
    public void aggiungiTaglia(Taglia taglia) {
        repTaglia.save(taglia);
    }

    @Override
    public Taglia creaTaglia(long id, String descrizione, String sigla) {
        return new Taglia(id, descrizione, sigla);
    }

    @Override
    public void rimuoviTaglia(Long id) {
        repTaglia.deleteById(id);
    }

}
