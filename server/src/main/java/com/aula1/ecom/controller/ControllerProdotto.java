/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.controller;

import com.aula1.ecom.dto.ListaProdottoDto;
import com.aula1.ecom.dto.TokenDto;
import com.aula1.ecom.model.Prodotto;
import com.aula1.ecom.model.Token;
import com.aula1.ecom.service.SecurityService;
import com.aula1.ecom.service.SrvProdotto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Niccolò Micozzi
 */
@CrossOrigin("*")
@RestController
public class ControllerProdotto {

    @Autowired
    SrvProdotto srvProdotto;

    @Autowired
    SecurityService securityService;

    @RequestMapping("/listaProdotto")
    @ResponseBody
    public ListaProdottoDto listaProdotto(@RequestBody TokenDto dto) {

        Token token = dto.getToken();

        Token t = securityService.retrieveToken(token);

        List<Prodotto> listaProdotto = srvProdotto.listaProdotto();

        ListaProdottoDto listaProdottoDto = srvProdotto.creaListaProdottoDto(listaProdotto, t);

        return listaProdottoDto;
    }

}
