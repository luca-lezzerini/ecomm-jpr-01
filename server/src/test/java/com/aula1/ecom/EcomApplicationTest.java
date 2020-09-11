package com.aula1.ecom;

import com.aula1.ecom.model.Colore;
import com.aula1.ecom.repository.RepColore;
import com.aula1.ecom.service.SrvColore;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EcomApplicationTest {

    @Autowired
    SrvColore serv;

    @Autowired
    RepColore repCol;

    @Test
    public void contextLoads() {
        System.out.println("Siamo qui");
        List<Colore> lista = serv.mostraTutto();
        System.out.println(lista);
    }

    @Test
    public void verificaInserimentoTest() {
        //creo un colore noto (rosso)
        Colore c = new Colore();
        c.setColore("rosso");
        //cerco se esiste il rosso e se esiste lo cancello, poi lo ricerco e non deve esistere
        List<Colore> f = repCol.findByColore(c.getColore());
        if (f != null && f.size() > 0) {
            for (Colore colore : f) {
                repCol.delete(colore);
            }
            f = repCol.findByColore(c.getColore());
            assertTrue(f == null || f.size() == 0, "Il rosso contnua ad esistere dopo la concellazione!");
        }
        //chiamo servizio per inserimento del rosso
        System.out.println(c);
        c = serv.aggiungiColore(c);
        System.out.println(c);
        //chiamo servizio per la ricerca del rosso appena inserito
        Colore g=repCol.getOne(c.getId());
        //verifico che il rosso sia stato trovato
        Long a = c.getId();
        Long b = g.getId();
        String x = c.getColore();
        String y = c.getColore();
        assertTrue(a.equals(b)&& x.equals(y));//<--problema

    }

}
