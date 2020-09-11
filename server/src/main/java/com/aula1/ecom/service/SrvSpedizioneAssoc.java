/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.service;

import com.aula1.ecom.dto.ProdottoDto;
import com.aula1.ecom.dto.SpedizioneDto;
import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Spedizione;

/**
 *
 * @author gianmarco
 */
public interface SrvSpedizioneAssoc {
    public ProdottoDto associaSpedizione(SpedizioneDto spedizioneDto, ProdottoDto prodottoDto);
    public ProdottoDto deAssociaSpedizione(ProdottoDto prodottoDto);
}
