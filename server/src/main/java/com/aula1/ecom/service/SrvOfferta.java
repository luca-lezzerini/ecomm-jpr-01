/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Offerta;
import java.util.List;

/**
 *
 * @author gianmarco
 */
public interface SrvOfferta {

    public Offerta creaOfferta(Offerta offerta);

    public List<Offerta> aggiungiOfferta(Offerta offerta);

    public List<Offerta> cancellaOfferta(Long id);

    public List<Offerta> modificaOfferta(Offerta offerta);

    public Offerta preparaModificaOfferta(Offerta offerta);

    public List<Offerta> listaOfferta();

    public List<Offerta> cercaOfferta(String codice);
}
