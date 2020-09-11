/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.dto.CategoriaDto;
import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.service.SrvCat;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    public CategoriaDto lista () {
        CategoriaDto dto = new CategoriaDto();
        dto.setLista(srvCat.listaCategoria());
        return dto;
    }

    @RequestMapping("/cercaCategoria")
    @ResponseBody
    public CategoriaDto cercaCategoria(@RequestBody CategoriaDto dto) {
        dto.setLista(srvCat.cercaCategoria(dto.getStringa()));
        return dto;
    }
}
