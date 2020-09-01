package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaColoreDto;
import com.aula1.ecom.model.Colore;
import com.aula1.ecom.model.Token;
import java.util.List;

public interface SrvColore {

    public List<Colore> cerca(String cerca);

    public List<Colore> mostraTutto();

    public void aggiungiColore(Colore colore);

    public void modificaColore(Colore colore);

    public Colore creaColore(long id, String descrizione);

    public void rimuoviColore(Long id);

    public ListaColoreDto creaListaColoreDto(List<Colore> listaColori, Token t);
    

}
