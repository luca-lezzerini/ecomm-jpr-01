/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

/**
 *
 * @author Prisacar
 * 
 * La classe è composta solo dalla stringa cerca con metodi get e set,
 * il costruttore col parametro cerca e quello senza parametri
 * la classe serve solo per intercettare ricerche basate su stringa dal client
 * 
 */
public class CercaDto {

    private String cerca;

    public CercaDto() {
    }

    public CercaDto(String cerca) {
        this.cerca = cerca;
    }

    public String getCerca() {
        return cerca;
    }

    public void setCerca(String cerca) {
        this.cerca = cerca;
    }
}
