package com.aula1.ecom.service;

import com.aula1.ecom.model.Token;

public interface SecurityService {

    /**
     * Cerca se esiste il token passato e se non è scaduto.
     * In tale ipotesi lo ritorna direttamente,
     * altrimenti ne crea uno nuovo e lo ritorna
     * @param t il toke da cercare. Può essere null.
     * @return il token esistente o appena creato
     */
    Token retrieveToken(Token t);
}
