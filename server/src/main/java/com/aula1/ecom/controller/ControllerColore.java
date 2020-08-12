package com.aula1.ecom.controller;

import com.aula1.ecom.dto.CercaDto;
import com.aula1.ecom.model.Colore;
import com.aula1.ecom.service.SrvColore;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
    //che contengono 
    @RequestMapping(value = "/cercaColore")
    @ResponseBody
    public List<Colore> cerca(@RequestBody CercaDto dto) {
        System.out.println("\n\n\nSto cercando " + dto.getCerca() + "\n\n\n");      //a scopo di debugging
        List<Colore> listaColori = srvColore.cerca(dto.getCerca());
        System.out.println("\n\n\nHo finito di cercare " + dto.getCerca() + "\n\n\n");
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

    public List aggiungiColore(@RequestBody String dto) {

        return srvColore.aggiungiColore(dto);
    }
    
    @RequestMapping("/cancella")
    @ResponseBody
    public List<Colore> cancella(@RequestBody Long id) {
        return srvColore.cancella(id);
    }
    
    @RequestMapping("/modifica")
    @ResponseBody
    public List<Colore> modifica(@RequestBody Colore colore) {
        return srvColore.modifica(colore);
    }
}
