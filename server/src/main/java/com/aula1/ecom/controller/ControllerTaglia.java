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

    @RequestMapping("/tutteLeTaglie")
    @ResponseBody
    public List<Taglia> tutteLeTaglie() {
        
        System.out.println("provaprova");
        return srvTaglia.tutteLeTaglie();
    }

}
