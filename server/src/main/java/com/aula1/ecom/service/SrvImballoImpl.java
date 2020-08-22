/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Imballo;
import com.aula1.ecom.repository.RepImballaggio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Kevin
 */
@Service
public class SrvImballoImpl  implements SrvImballo {

    @Autowired
    RepImballaggio repImballaggio;
    
   

    @Override
    public List<Imballo> RicercaPerPrezzo(Long id, Double prezzo) {
       return repImballaggio.FindByIdAndPrezzo(id, prezzo);
    }

    @Override
    public List<Imballo> cercaImballo(Long id) {
        return repImballaggio.FindByOrderByIdAsc(id);
    }
    
}
