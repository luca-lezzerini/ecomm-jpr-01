/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.service.SrvTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping("/listaTaglia")
    @ResponseBody
    public List<Taglia> listaTaglia() {

        System.out.println("provaprova");
        return srvTaglia.listaTaglia();
    }

    @RequestMapping("/cancellaTaglia")
    @ResponseBody
    public void cancellaTaglia(@RequestBody Long id) {
        srvTaglia.cancellaTaglia(id);
        System.out.println("provaCancella");

    }
    @RequestMapping("/modificaTaglia")
    @ResponseBody
    public void modificaTaglia(@RequestBody Taglia taglia) {
        srvTaglia.modificaTaglia(taglia);
        System.out.println("provaModifica");
    }    
}
