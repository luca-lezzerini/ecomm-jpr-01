/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.repository;

import com.aula1.ecom.model.Colore;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepColore extends JpaRepository <Colore, Long> {
    //Prisacar
    public List<Colore> findByColoreLike(String cerca);                         //Faccio una ricerca che mi dia tutti i colori che contengono le lettere contenute nella stringa
    
  
}

