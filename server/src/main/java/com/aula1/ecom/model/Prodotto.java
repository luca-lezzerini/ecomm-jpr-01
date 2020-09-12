/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.aula1.ecom.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 *
 * @author Kevin
 */
@Entity
public class Prodotto {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String codice;
    @Column
    private String descrizione;
    @Column
    private Double peso;
    @Column
    private Double prezzo;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotto", allowSetters = true)
    Taglia taglia;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotto", allowSetters = true)
    Imballo imballo;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotto", allowSetters = true)
    Colore colore;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotto", allowSetters = true)
    Offerta offerta;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotto", allowSetters = true)
    Spedizione spedizione;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties(value = "prodotto", allowSetters = true)
    Categoria categoria;

    //COSTRUTTORI
    public Prodotto(Long id, String codice, String descrizione, Double peso, Double prezzo) {
        this.id = id;
        this.codice = codice;
        this.descrizione = descrizione;
        this.peso = peso;
        this.prezzo = prezzo;
    }

    public Prodotto() {
    }

    //METODI GET AND SETTER
    //TODO inserire metodo get&set sulle ManyToOne 
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public Double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(Double prezzo) {
        this.prezzo = prezzo;
    }

}
