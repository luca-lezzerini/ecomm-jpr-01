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
        System.out.println("\n\n\nSto cercando " + "%" + dto.getCerca() + "%" + "\n\n\n");      //a scopo di debugging \n serve per andare a capo e rendere più facilmente localizzabile il log
        List<Colore> listaColori = srvColore.cerca( dto.getCerca() ); //le percentuali sono le wildcards di mysql (il prof ha consigliato di usarle nella issue #33)
        System.out.println("\n\n\nHo finito di cercare " + "%" + dto.getCerca() + "%" + "\n\n\n");
        return listaColori;
    }
    
    /*
    Da implementare aggiungi --  rimuovi -- modifica
     */

}
