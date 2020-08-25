/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.model.Offerta;
import com.aula1.ecom.service.SrvOfferta;
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
public class ControllerOfferta {
    @Autowired
    SrvOfferta srvOfferta;
    @RequestMapping("/aggiungiOfferta")
    @ResponseBody

    public List aggiungiOfferta(@RequestBody Offerta offerta) {

        return srvOfferta.aggiungiOfferta(offerta);
    }

    @RequestMapping("/cancellaOfferta")
    @ResponseBody
    public List<Offerta> cancella(@RequestBody Long id) {
        return srvOfferta.cancellaOfferta(id);
    }
    @RequestMapping("/preparaModificaOfferta")
    @ResponseBody
    public Offerta preparaModifica(@RequestBody Offerta offerta) {
        return srvOfferta.preparaModificaOfferta(offerta);
    }
    @RequestMapping("/modificaOfferta")
    @ResponseBody
    public List<Offerta> modificaOfferta(@RequestBody Offerta offerta) {
        return srvOfferta.modificaOfferta(offerta);
    }
     
    @RequestMapping("/listaOfferta")
    @ResponseBody
    public List lista() {
        return srvOfferta.listaOfferta();
    }

    @RequestMapping("/cercaOfferta")
    @ResponseBody
    public List cercaOfferta(@RequestBody String codice) {
        return srvOfferta.cercaOfferta(codice);
    }
}
