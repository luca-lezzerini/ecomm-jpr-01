/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.dto;

/**
 *
 * @author Prisacar
 */
public class ColoreDto {
    
    private long id;
    
    private String colore;

    public ColoreDto(long id) {
        this.id = id;
    }

    public ColoreDto() {
    }

    public ColoreDto(long id, String colore) {
        this.id = id;
        this.colore = colore;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }
}
