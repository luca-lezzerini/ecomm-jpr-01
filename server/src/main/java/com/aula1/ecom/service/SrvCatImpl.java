/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.repository.RepCat;
import static java.lang.Long.max;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author gianmarco
 */
@Service
public class SrvCatImpl implements SrvCat {

    @Autowired
    RepCat repCat;

    @Override
    public Categoria creaCategoria(String dto) {
        Long max = 0L;
        List<Categoria> arr = repCat.findAll();
        arr.get(1).getId();
        for (int i = 0; i < arr.size(); i++) {      //
            if (max <= arr.get(i).getId()) {        // serve a trovare l'id maggiore e incremntarlo di uno
                max = arr.get(i).getId();           //
            }                                       //
        }
        Categoria categoria = new Categoria(max + 1, dto);
        return categoria;
    }

    @Override
    public List<Categoria> aggiungiCategoria(String dto) {
        repCat.save(creaCategoria(dto));
        return lista();
    }

    /*
    @Override
    public Categoria cancella(Long id) {
        repCat.deleteById(id);
        return lista();
    }

    @Override
    public Categoria modifica(Categoria categoria) {
        repCat.save(categoria);
        return lista();
    }
     */
    @Override
    public List<Categoria> lista() {
        return repCat.findAll();
    }

    @Override
    public List<Categoria> cercaCategoria(String descrizione) {
        return repCat.findByDescrizione(descrizione);
    }
}
