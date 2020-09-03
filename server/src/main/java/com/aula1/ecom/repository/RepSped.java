/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Spedizione;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RepSped extends JpaRepository<Spedizione ,Long> {

    @Query("select s from Spedizione s where s.codice like %:criterio% or s.nome like %:criterio%")
    List<Spedizione> searchByCodiceNome(@Param("criterio") String criterio);

    List<Spedizione> findByOrderByIdAsc();
}
