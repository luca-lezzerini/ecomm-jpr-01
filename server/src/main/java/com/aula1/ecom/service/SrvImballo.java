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

    public Imballo cercaImballo(Long id);

    public List<Imballo> ricercaPerCostoEDescrizione(String descrizione, Double costo);

    public List<Imballo> ricercaPerCosto(Double costo);

    public void aggiungiImballo(Imballo imballo);

    public Imballo creaImballo(Long id, String descrizione, Double costo);
}
