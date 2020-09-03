/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

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

    @RequestMapping("/aggiungiSpedizione")
    @ResponseBody
    public List aggiungiSpedizione(@RequestBody Spedizione spedizione) {
        System.out.println("Entrato in aggiungiSpedizione");
        return srvSped.aggiungiSpedizione(spedizione);
    }

    @RequestMapping("/cancellaSpedizione")
    @ResponseBody
    public List<Spedizione> cancella(@RequestBody Long id) {
        System.out.println("Entrato in cancella");
        return srvSped.cancellaSpedizione(id);
    }

    @RequestMapping("/preparaModificaSpedizione")
    @ResponseBody
    public Spedizione preparaModifica(@RequestBody Spedizione spedizione) {
        System.out.println("Entrato in preparaModifica");
        return srvSped.preparaModificaSpedizione(spedizione);
    }

    @RequestMapping("/modificaSpedizione")
    @ResponseBody
    public List<Spedizione> modificaSpedizione(@RequestBody Spedizione spedizione) {
        System.out.println("Entrato in modificaSpedizione");
        return srvSped.modificaSpedizione(spedizione);
    }

    @RequestMapping("/listaSpedizione")
    @ResponseBody
    public List<Spedizione> lista() {
        System.out.println("Entrato in lista");
        return srvSped.listaSpedizione();
    }

    @RequestMapping("/cercaSpedizione")
    @ResponseBody
    public List<Spedizione> cercaSpedizione(@RequestBody String codice) {
        System.out.println("Entrato in cercaSpedizione");
        return srvSped.cercaSpedizione(codice);
    }
}
