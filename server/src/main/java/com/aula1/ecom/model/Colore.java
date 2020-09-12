package com.aula1.ecom.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Prisacar
 * 
 */
@Entity
@Table(name = "colore")
public class Colore implements Serializable {

    @Id
    @Column
        //(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
        //(name = "colore")
    private String colore;

    
    @OneToMany(mappedBy = "colore",fetch=FetchType.EAGER)
    @JsonIgnoreProperties(value = "colore", allowSetters = true)
    List<Prodotto> prodotto = new ArrayList<>();

    public Colore() {
    }

    public Colore(Long id, String colore) {
        this.id = id;
        this.colore = colore;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }

    @Override
   
    public String toString() {
        return "Colore{" + "id=" + id + ", colore=" + colore + "}"; //<<-- qui modifcato generatevalue !!!
    }

}
