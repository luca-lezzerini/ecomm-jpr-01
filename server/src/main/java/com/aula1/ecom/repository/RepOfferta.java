/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Offerta;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gianmarco
 */
public interface RepOfferta extends JpaRepository<Offerta, Long> {

    List<Offerta> findByOrderByIdAsc();

    List<Offerta> findByCodiceOrderByIdAsc(String codice);
}
