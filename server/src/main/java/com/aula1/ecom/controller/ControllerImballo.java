/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.dto.ListaImballiDto;
import com.aula1.ecom.dto.TokenDto;
import com.aula1.ecom.model.Imballo;
import com.aula1.ecom.model.Token;
import com.aula1.ecom.service.SrvImballo;
import com.aula1.ecom.serviceimpl.SecurityServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Kevin
 */
@CrossOrigin("*")
@RestController
public class ControllerImballo {
    @Autowired
    SrvImballo srvImballo;

    @Autowired
    SecurityServiceImpl securityServiceImpl;

    @RequestMapping("/listaImballi")
    @ResponseBody
    public ListaImballiDto listaImballi(@RequestBody TokenDto dto) {
        Token token = dto.getToken();

        Token t = securityServiceImpl.retrieveToken(token);

        List<Imballo> listaImballi = srvImballo.listaImballi();

        ListaImballiDto listaImballiDto = srvImballo.creaListaImballi(listaImballi, t);
        return listaImballiDto;
    }

    @RequestMapping("/cercaImballo")
    @ResponseBody
    public Imballo cercaImballo(@RequestBody Long id) {
        return srvImballo.cercaImballo(id);
    }

    @RequestMapping("/ricercaPerPrezzoEDescizione")
    @ResponseBody
    public List<Imballo> ricercaPerPrezzoEDescrizione(@RequestBody String descrizione, Double costo) {
        return srvImballo.ricercaPerCostoEDescrizione(descrizione, costo);
    }

    @RequestMapping("/ricercaPerPrezzo")
    @ResponseBody
    public List ricercaPerPrezzo(@RequestBody Double costo) {
        return srvImballo.ricercaPerCosto(costo);
    }

    @RequestMapping("/aggiungiImballo")
    @ResponseBody
    public void aggiungiImballo(@RequestBody Imballo imballo) {
        srvImballo.aggiungiImballo(imballo);
    }

//    public Imballo cercaImballo(@ResponseBody Long id){
//        return srvImballo.cercaImballo(id);
//    }
}
