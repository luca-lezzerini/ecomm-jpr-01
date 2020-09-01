/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Categoria;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author gianmarco
 */
@Repository
public interface RepCat extends JpaRepository<Categoria, Long> {

    @Query("SELECT c FROM Categoria c WHERE c.descrizione = :descrizione ORDER BY Id")
    List<Categoria> trovaPerDescrizione(@Param("descrizione") String descrizione);

    @Query("SELECT c FROM Categoria c ORDER BY Id")
    List<Categoria> trovaPerId();

    
    List<Categoria> findByDescrizioneLike(String descrizione);
}
