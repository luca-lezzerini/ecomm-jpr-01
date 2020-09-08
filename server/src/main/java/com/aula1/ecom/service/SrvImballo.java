package com.aula1.ecom.service;

import com.aula1.ecom.dto.ListaImballiDto;
import com.aula1.ecom.model.Imballo;
import com.aula1.ecom.model.Token;
import java.util.List;

public interface SrvImballo {

    public Imballo cercaImballo(Long id);

    public List<Imballo> ricercaPerCostoEDescrizione(String descrizione, Double costo);

    public List<Imballo> ricercaPerCosto(Double costo);

    public void aggiungiImballo(Imballo imballo);

    public Imballo creaImballo(Long id, String descrizione, Double costo);

    public List<Imballo> listaImballi();

    /**
     * Crea un DTO per il client data una lista di imballi ed il token di sicurezza
     * @param listaImballi la lista di imballi da ritornare al client
     * @param t il token di sicurezza da ritornare al client
     * @return ritorna un nuovo DTO popolato con i parametri passati
     */
    ListaImballiDto creaListaImballi(List<Imballo> listaImballi, Token t);
}
