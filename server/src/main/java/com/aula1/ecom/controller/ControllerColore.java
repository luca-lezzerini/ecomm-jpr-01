package com.aula1.ecom.controller;
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
   
        @RequestMapping("/coloreTipo")
    @ResponseBody
    public String coloreTipo(@RequestBody ColoreDto dto) {
        srvColore.listaColori();
            System.out.println("tipo");
        return "";
    }
   
}