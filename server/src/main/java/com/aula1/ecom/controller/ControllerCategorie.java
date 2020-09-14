/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.dto.CategoriaDto;
import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.service.SrvCat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gianmarco
 */
@CrossOrigin("*")
@RestController
public class ControllerCategorie {

    @Autowired
    SrvCat srvCat;

    @RequestMapping("/aggiungiCategoria")
    @ResponseBody

    public CategoriaDto aggiungiCategoria(@RequestBody CategoriaDto dto) {
        dto.setLista(srvCat.aggiungiCategoria(dto.getCategoria().getDescrizione()));
        return dto;
    }

    @RequestMapping("/cancellaCategoria")
    @ResponseBody
    public CategoriaDto cancella(@RequestBody CategoriaDto dto) {
        dto.setLista(srvCat.cancellaCategoria(dto.getId()));
        return dto;
    }

    @RequestMapping("/preparaModificaCategoria")
    @ResponseBody
    public CategoriaDto preparaModifica(@RequestBody CategoriaDto dto) {
        dto.setCategoria(srvCat.preparaModificaCategoria(dto.getCategoria()));
        return dto;
    }

    @RequestMapping("/modificaCategoria")
    @ResponseBody
    public CategoriaDto modificaCategoria(@RequestBody CategoriaDto dto) {
        dto.setLista(srvCat.modificaCategoria(dto.getCategoria()));
        return dto;
    }

    @RequestMapping("/listaCategoria")
    @ResponseBody
    public CategoriaDto lista(@RequestBody CategoriaDto param) {
        System.out.println(param);
        CategoriaDto dto = new CategoriaDto();
        // Creo le istruzioni per il recupero di una pagina specifica
        Pageable p = PageRequest.of(
                param.getPaginaCorrente() - 1,
                param.getNumeroElementiXPagina()
        );
        // eseguo la query paginata
        Page<Categoria> pg = srvCat.listaCategoria(p);
        // recupero la lista degli elementi da Page
        dto.setLista(pg.getContent());
        // recupera altri dati da ritornare
        dto.setNumeroTotaleElementi(pg.getTotalElements());
        dto.setNumeroTotalePagine(pg.getTotalPages());
        dto.setPaginaCorrente(p.getPageNumber() + 1);
        // restituisco il risultato
        return dto;
    }

    @RequestMapping("/cercaCategoria")
    @ResponseBody
    public CategoriaDto cercaCategoria(@RequestBody CategoriaDto param) {
        System.out.println(param);
        // Creo le istruzioni per il recupero di una pagina specifica
        Pageable p = PageRequest.of(
                param.getPaginaCorrente() - 1,
                param.getNumeroElementiXPagina()
        );
        Page<Categoria> pg = srvCat.cercaCategoriaPaginato(
                param.getCategoria().getDescrizione(),
                p
        );
        System.out.println(pg);
        CategoriaDto ris = new CategoriaDto();
        ris.setLista(pg.getContent());
        // recupera altri dati da ritornare
        ris.setNumeroTotaleElementi(pg.getTotalElements());
        ris.setNumeroTotalePagine(pg.getTotalPages());
        ris.setPaginaCorrente(p.getPageNumber() + 1);
        // restituisco il risultato
        return ris;
    }
}
