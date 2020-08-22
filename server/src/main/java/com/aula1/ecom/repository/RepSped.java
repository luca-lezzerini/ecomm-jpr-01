/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Spedizione;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author gianmarco
 */
@Repository
public interface RepSped extends JpaRepository<Spedizione ,Long> {

    List<Spedizione> findByCodiceOrderByIdAsc(String codice);

    List<Spedizione> findByOrderByIdAsc();
}
