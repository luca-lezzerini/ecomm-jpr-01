/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Imballo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Kevin
 */
@Repository
public interface RepImballaggio extends JpaRepository<Imballo , Long> {
     //List<Imballo> FindByOrderByIdAsc(Long id);
     List<Imballo> FindByCosto(Double costo); 
    
}
