/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Niccolò Micozzi
 */
@Repository
public interface RepProdotto extends JpaRepository<Prodotto, Long>{

    public List<Prodotto> findByCodiceLikeOrDescrizioneLike(String codice, String descrizione);
    
    
}
