/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Taglia;
import java.util.List;

/**
 *
 * @author skunex
 */
public interface SrvTaglia {

    List<Taglia> listaTaglia();

    void cancellaTaglia(Long id);

    void modificaTaglia(Taglia taglia);
}
