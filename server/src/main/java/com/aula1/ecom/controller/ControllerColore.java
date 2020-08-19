package com.aula1.ecom.controller;

import com.aula1.ecom.dto.CercaDto;
import com.aula1.ecom.model.Colore;
import com.aula1.ecom.service.SrvColore;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author tomasz
 */
@CrossOrigin("*")
@RestController
public class ControllerColore {

    @Autowired
    SrvColore srvColore;

    //Prisacar
    //Si fa una ricerca in base ad una stringa e si aspetta come output tutti i colori 
    //che contengono tale stringa
    @RequestMapping(value = "/cercaColore")
    @ResponseBody
    public List<Colore> cerca(@RequestBody CercaDto dto) {
        System.out.println("\n\n\nSto cercando " + dto.getCerca() + "\n\n\n");      //a scopo di debugging
        List<Colore> listaColori = srvColore.cerca(dto.getCerca());
        return listaColori;
    }

    @RequestMapping(value = "/mostraTuttiColori")
    @ResponseBody
    public List<Colore> mostraTutto() {
        List<Colore> listaColori = srvColore.mostraTutto();
        return listaColori;
    }

    @RequestMapping("/aggiungiColore")
    @ResponseBody
    public Colore aggiungiColore(@RequestBody String dto) {
        System.out.println("\n\nSono arrivato in aggiungi");
        Colore colore = srvColore.creaColore(0L, dto);                          //Creo il colore che aggiungerò al database
        srvColore.aggiungiColore(colore);                                       //aggiungo colore al database
        List<Colore> listaColori = srvColore.cerca(dto);                        //prendo tutti i colori
        return listaColori.get(listaColori.size() - 1);                         //e spedisco indietro l'ultimo elemento che ho appena aggiunto

    }

    @RequestMapping("/rimuoviColore")
    @ResponseBody
    public void rimuoviColore(@RequestBody Colore colore) {
        System.out.println("\n\nSono arrivato in rimuovi");
        srvColore.rimuoviColore(colore.getId());
    }

    @RequestMapping("/modificaColore")
    @ResponseBody
    public void modificaColore(@RequestBody Colore colore) {
        System.out.println("\n\nSono arrivato in modifica");
        srvColore.modificaColore(colore);
    }
}
