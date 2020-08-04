/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Taglia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Kevin
 */
public interface RepTaglia extends JpaRepository <Taglia, Long> {
public List<Taglia> findAll(Long id);    
}
