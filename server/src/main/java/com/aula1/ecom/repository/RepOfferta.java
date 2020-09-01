/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Offerta;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author gianmarco
 */
public interface RepOfferta extends JpaRepository<Offerta, Long> {

    //   List<Offerta> findByOrderByIdAsc();
    @Query("SELECT o FROM Offerta o ORDER BY Id")
    List<Offerta> trovaPerId();

    //   List<Offerta> trovaPerCodice(String codice);
    @Query("SELECT o FROM Offerta o WHERE o.codice = :codice ORDER BY Id")
    List<Offerta> trovaPerCodice(@Param("codice") String codice);
    
}
