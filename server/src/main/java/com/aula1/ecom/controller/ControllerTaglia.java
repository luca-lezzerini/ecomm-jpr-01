/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.dto.ListaTaglieDto;
import com.aula1.ecom.dto.TagliaDto;
import com.aula1.ecom.dto.TokenDto;
import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.model.Token;
import com.aula1.ecom.service.SecurityService;
import com.aula1.ecom.service.SrvTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.data.jpa.domain.AbstractPersistable_.id;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Skrunex
 */
@CrossOrigin("*")
@RestController
public class ControllerTaglia {

    @Autowired
    SrvTaglia srvTaglia;

    @Autowired
    SecurityService securityService;

    @RequestMapping("/listaTaglia")
    @ResponseBody
    public ListaTaglieDto listaTaglia(@RequestBody TokenDto dto) {
        System.out.println("provaprova");
        
        Token t = dto.getToken();
        t = securityService.retrieveToken(t);
        
        List<Taglia> listaTaglia = srvTaglia.listaTaglia();
        
        ListaTaglieDto listaTaglie = srvTaglia.creaListaTaglia(listaTaglia, t);
        
        return listaTaglie;
    }

    @RequestMapping("/cancellaTaglia")
    @ResponseBody
    public ListaTaglieDto cancellaTaglia(@RequestBody TagliaDto dto) {
        // TODO gestire token
        Token t =dto.getToken();
        t = securityService.retrieveToken(t);
        srvTaglia.cancellaTaglia(dto.getTaglia().getId());
        List<Taglia> listaTaglia = srvTaglia.listaTaglia();
        ListaTaglieDto risposta = new ListaTaglieDto(t, listaTaglia);
        System.out.println("provaCancella");
        // FIXME: gestire correttamente
        return risposta;

    }

    @RequestMapping("/modificaTaglia")
    @ResponseBody
    public void modificaTaglia(@RequestBody Taglia taglia) {
        srvTaglia.modificaTaglia(taglia);
        System.out.println("provaModifica");
    }
}
