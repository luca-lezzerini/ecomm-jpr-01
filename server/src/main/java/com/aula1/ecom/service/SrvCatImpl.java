/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;


import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.repository.RepCat;
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
/*
    @Override
    public Categoria creaCategoria(Categoria dto) {
        Categoria categoria = new Categoria(dto.getId(), dto.getDescrizione());
        return categoria;
    }

    @Override
    public Categoria aggiungiCategoria(Categoria categoria) {
        repCat.save(categoria);
        return lista();
    }

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
    public Categoria cercaCategoria(String descrizione) {
        return (Categoria) repCat.findByDescrizione(descrizione);
    }
}
