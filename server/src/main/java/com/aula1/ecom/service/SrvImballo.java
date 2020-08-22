/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Imballo;
import java.util.List;

/**
 *
 * @author Kevin
 */
public interface SrvImballo {
    public List<Imballo> cercaImballo(Long id);
    public List<Imballo> RicercaPerPrezzo(Long id , Double prezzo);
}
