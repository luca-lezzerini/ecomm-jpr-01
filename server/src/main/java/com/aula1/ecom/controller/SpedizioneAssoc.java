/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.dto.ProdottoDto;
import com.aula1.ecom.dto.SpedizioneDto;
import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.service.SrvProdotto;
import com.aula1.ecom.service.SrvSpedizioneAssoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gianmarco
 */
@CrossOrigin("*")
@RestController
public class SpedizioneAssoc {

    @Autowired
    SrvSpedizioneAssoc srvSpedizioneAssoc;

    @RequestMapping("/associaSpedizione")
    public ProdottoDto associaSpedizione(SpedizioneDto spedizioneDto, ProdottoDto prodottoDto) {
        return srvSpedizioneAssoc.associaSpedizione(spedizioneDto, prodottoDto);
    }

    @RequestMapping("/deAssociaSpedizione")
    public ProdottoDto deAssociaSpedizione(ProdottoDto prodottoDto) {

        return prodottoDto;
    }
}
