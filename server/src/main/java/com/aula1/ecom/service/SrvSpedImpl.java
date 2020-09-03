/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Spedizione;
import com.aula1.ecom.repository.RepSped;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author gianmarco
 */
@Service
public class SrvSpedImpl implements SrvSped {

    @Autowired
    RepSped repSped;

    @Override
    public Spedizione creaSpedizione(Spedizione spedizione) {
        Long max = 0L;
        List<Spedizione> arr = repSped.findAll();

        for (int i = 0; i < arr.size(); i++) {      //
            if (max <= arr.get(i).getId()) {        // serve a trovare l'id maggiore e incrementarlo di uno
                max = arr.get(i).getId();           //
            }                                       //
        }
        Spedizione spedizioneFinal = new Spedizione(max + 1, spedizione.getCodice(), 
                spedizione.getNome(), spedizione.getPrezzoKg());
        return spedizioneFinal;
    }

    @Override
    public List<Spedizione> aggiungiSpedizione(Spedizione spedizione) {
        List<Spedizione> arr = repSped.findByOrderByIdAsc();  //
        boolean control = false;                              //
        for (int i = 0; arr.size() > i; i++) {              //
            if (spedizione.getCodice().equals(arr.get(i).getCodice()) || 
                    spedizione.getNome().equals(arr.get(i).getNome()) || 
                    spedizione.getPrezzoKg() == arr.get(i).getPrezzoKg()) {  //
                control = true;                             //
                break;                                      //
            }                                              //
        }                                                   //
        if (control != true) {                                  //
            repSped.save(creaSpedizione(spedizione));                    //
        }                                                   //
        return listaSpedizione();
    }

    @Override
    public List<Spedizione> cancellaSpedizione(Long id) {
        repSped.deleteById(id);
        return listaSpedizione();
    }

    @Override
    public List<Spedizione> modificaSpedizione(Spedizione spedizione) {
        List<Spedizione> arr = repSped.findByOrderByIdAsc();
        boolean control = false;
        if (spedizione.getCodice() != null && !spedizione.getCodice().isEmpty()
                && spedizione.getNome() != null && !spedizione.getNome().isEmpty()) {
            for (int i = 0; arr.size() > i; i++) {
                if (spedizione.getCodice().equals(arr.get(i).getCodice())&& spedizione.getId()!=arr.get(i).getId()) {
                    control = true;
                    break;
                }
            }
            if (control == false) {
                repSped.save(spedizione);
            }
        }
        return listaSpedizione();
    }

    @Override
    public Spedizione preparaModificaSpedizione(Spedizione spedizione) {
        System.out.print(spedizione.getId() + " ");
        System.out.print(spedizione.getCodice() + " ");
        System.out.print(spedizione.getNome() + " ");
        System.out.println(spedizione.getPrezzoKg());
        return spedizione;
    }

    @Override
    public List<Spedizione> listaSpedizione() {
        return repSped.findByOrderByIdAsc();
    }

    @Override
    public List<Spedizione> cercaSpedizione(String codice) {
        return repSped.searchByCodiceNome(codice);
    }

}
