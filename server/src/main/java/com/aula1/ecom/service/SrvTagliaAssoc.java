/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Taglia;

/**
 *
 * @author Roberto
 */
public interface SrvTagliaAssoc {

    void associaTaglia(Prodotto prodotto, Taglia taglia);

    void dissociaTaglia(Prodotto prodotto);
}
