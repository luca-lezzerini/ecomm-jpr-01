/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;


import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.service.SrvCat;
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
//elimina
//modifica

    @RequestMapping("/aggiungiCategoria")
    @ResponseBody

    public Categoria aggiungiCategoria(@RequestBody Categoria categoria) {

        return srvCat.aggiungiCategoria(categoria);
    }

    @RequestMapping("/cancella")
    @ResponseBody
    public Categoria cancella(@RequestBody Long id) {
        return srvCat.cancella(id);
    }

    @RequestMapping("/modifica")
    @ResponseBody
    public Categoria modifica(@RequestBody Categoria categoria) {
        return srvCat.modifica(categoria);
    }
    
     @RequestMapping("/lista")
    @ResponseBody
    public Categoria lista() {
        return srvCat.lista();
}
    @RequestMapping("/cercaCategoria")
    @ResponseBody
    public Categoria cercaCategoria(@RequestBody Categoria categoria) {
        return srvCat.modifica(categoria);
}
}