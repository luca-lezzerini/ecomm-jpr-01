/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Colore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Vorzillo
 */
@Repository
public interface RepColore extends JpaRepository <Colore, Long> {
  
}

