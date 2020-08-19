package com.aula1.ecom.service;

import com.aula1.ecom.model.Colore;
import java.util.List;

public interface SrvColore {

    public List<Colore> cerca(String cerca);

    public List<Colore> mostraTutto();

    public void aggiungiColore(Colore colore);

    public void modificaColore(Colore colore);

    public Colore creaColore(long id, String descrizione);

    public void rimuoviColore(Long id);

}
