package com.aula1.ecom.controller;

import com.aula1.ecom.model.Categoria;
import com.aula1.ecom.repository.RepCat;
import com.aula1.ecom.service.SrvCat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DataGeneratorController {
    
    @Autowired
    SrvCat srvCat;
    @Autowired
    RepCat repCat;
    
    @RequestMapping("/generate-data")
    public void generateData(){
        // genera 1000 categorie diverse
        repCat.deleteAllInBatch();
        for (int i = 0; i < 1000; i++) {
            Categoria cat = new Categoria(null, "Categoria n. " + i);
            cat = repCat.save(cat);
        }
    }

}
