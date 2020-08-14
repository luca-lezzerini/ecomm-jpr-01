/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import java.util.List;
import com.aula1.ecom.model.Spedizione;

/**
 *
 * @author gianmarco
 */
public interface SrvSped {
   public Spedizione creaSpedizione(String codice,String nome,double prezzo);

    public List<Spedizione> aggiungiSpedizione(String codice,String nome,double prezzo);

    public List<Spedizione> cancellaSpedizione(Long id);

    public List<Spedizione> modificaSpedizione(Spedizione spedizione);

    public Spedizione preparaModificaSpedizione(Spedizione spedizione);

    public List<Spedizione> listaSpedizione();

    public List<Spedizione> cercaSpedizione(String codice);  
}
