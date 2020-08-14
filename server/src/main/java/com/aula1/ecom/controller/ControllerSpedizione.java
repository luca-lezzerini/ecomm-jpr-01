/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.model.Spedizione;
import com.aula1.ecom.service.SrvSped;
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
public class ControllerSpedizione {

    @Autowired
    SrvSped srvSped;
//elimina
//modifica

    @RequestMapping("/aggiungiSpedizione")
    @ResponseBody

    public List aggiungiSpedizione(@RequestBody String codice, String nome, double prezzo) {

        return srvSped.aggiungiSpedizione(codice,nome,prezzo);
    }

    @RequestMapping("/cancellaSpedizione")
    @ResponseBody
    public List<Spedizione> cancella(@RequestBody Long id) {
        return srvSped.cancellaSpedizione(id);
    }
    @RequestMapping("/preparaModificaSpedizione")
    @ResponseBody
    public Spedizione preparaModifica(@RequestBody Spedizione spedizione) {
        return srvSped.preparaModificaSpedizione(spedizione);
    }
    @RequestMapping("/modificaSpedizione")
    @ResponseBody
    public List<Spedizione> modificaSpedizione(@RequestBody Spedizione spedizione) {
        return srvSped.modificaSpedizione(spedizione);
    }
     
    @RequestMapping("/listaSpedizione")
    @ResponseBody
    public List lista() {
        return srvSped.listaSpedizione();
    }

    @RequestMapping("/cercaSpedizione")
    @ResponseBody
    public List cercaSpedizione(@RequestBody String codice) {
        return srvSped.cercaSpedizione(codice);
    }
}
