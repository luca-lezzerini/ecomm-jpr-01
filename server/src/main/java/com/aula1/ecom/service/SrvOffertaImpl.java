/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Offerta;
import com.aula1.ecom.repository.RepOfferta;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author gianmarco
 */
@Service
public class SrvOffertaImpl implements SrvOfferta {

    @Autowired
    RepOfferta repOfferta;

    @Override
    public Offerta creaOfferta(Offerta offerta) {
        Long max = 0L;
        List<Offerta> arr = repOfferta.findAll();

        for (int i = 0; i < arr.size(); i++) {      //
            if (max <= arr.get(i).getId()) {        // serve a trovare l'id maggiore e incrementarlo di uno
                max = arr.get(i).getId();           //
            }                                       //
        }
        Offerta offertaFinal = new Offerta(max + 1, offerta.getCodice(),
                offerta.getDescrizione(), offerta.getScontoPercentuale());
        return offertaFinal;
    }

    @Override
    public List<Offerta> aggiungiOfferta(Offerta offerta) {
        List<Offerta> arr = repOfferta.findByOrderById();  //
        boolean control = false;                              //
        for (int i = 0; arr.size() > i; i++) {              //
            if (offerta.getCodice().equals(arr.get(i).getCodice())
                    || offerta.getDescrizione().equals(arr.get(i).getDescrizione())
                    || offerta.getScontoPercentuale() == arr.get(i).getScontoPercentuale()) {  //
                control = true;                             //
                break;                                      //
            }                                              //
        }                                                   //
        if (control != true) {                                  //
            repOfferta.save(creaOfferta(offerta));                    //
        }                                                   //
        return listaOfferta();
    }

    @Override
    public List<Offerta> cancellaOfferta(Long id) {
        repOfferta.deleteById(id);
        return listaOfferta();
    }

    @Override
    public List<Offerta> modificaOfferta(Offerta offerta) {
        List<Offerta> arr = repOfferta.findByOrderById();
        boolean control = false;
        if (offerta.getCodice() != null && !offerta.getCodice().isEmpty()
                && offerta.getDescrizione() != null && !offerta.getDescrizione().isEmpty()) {
            for (int i = 0; arr.size() > i; i++) {
                if (offerta.getCodice().equals(arr.get(i).getCodice()) && offerta.getId() != arr.get(i).getId()) {
                    control = true;
                    break;
                }
            }
            if (control == false) {
                repOfferta.save(offerta);
            }
        }
        return listaOfferta();
    }

    @Override
    public Offerta preparaModificaOfferta(Offerta offerta) {
        System.out.print(offerta.getId() + " ");
        System.out.print(offerta.getCodice() + " ");
        System.out.print(offerta.getDescrizione() + " ");
        System.out.println(offerta.getScontoPercentuale());
        return offerta;
    }

    @Override
    public List<Offerta> listaOfferta() {
        return repOfferta.findByOrderById();
    }

    @Override
    public List<Offerta> cercaOfferta(String codice) {
        return repOfferta.findByCodiceOrderByIdAsc(codice);
    }

}
