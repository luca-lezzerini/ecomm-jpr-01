package com.aula1.ecom.service;

import com.aula1.ecom.model.Colore;
import com.aula1.ecom.repository.RepColore;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author aless
 */
@Service
public class SrvColoreImpl implements SrvColore {

    @Autowired
    RepColore repColore;

    //Prisacar
    public List<Colore> cerca(String cerca) {
        return repColore.findByColoreLike(cerca);                               //Comando suggerito da Lezerini sempre nella issue #33
    }
}
