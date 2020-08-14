/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Spedizione;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author gianmarco
 */
@Service
public class SrvSpedImpl implements SrvSped{

    @Override
    public Spedizione creaSpedizione(String codice, String nome, double prezzo) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Spedizione> aggiungiSpedizione(String codice, String nome, double prezzo) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Spedizione> cancellaSpedizione(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Spedizione> modificaSpedizione(Spedizione spedizione) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Spedizione preparaModificaSpedizione(Spedizione spedizione) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Spedizione> listaSpedizione() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Spedizione> cercaSpedizione(String codice) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
