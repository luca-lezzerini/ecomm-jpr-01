/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;


import com.aula1.ecom.model.Taglia;
import com.aula1.ecom.repository.RepTaglia;
import com.aula1.ecom.service.SrvTaglia;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SrvTagliaImpl implements SrvTaglia{
    
   @Autowired
   RepTaglia repTaglia;
   

    @Override
    public List<Taglia> listaTaglie(Long id) {
        return repTaglia.findAll(id);
               
    }
    
}
