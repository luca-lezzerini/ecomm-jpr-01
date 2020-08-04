/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.taglia;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface SrvTaglia {
    
public List<taglia> listaTaglie(Long id);  
}
