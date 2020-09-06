package com.aula1.ecom.serviceimpl;

import com.aula1.ecom.model.Token;
import com.aula1.ecom.repository.TokenRepository;
import com.aula1.ecom.service.SecurityService;
import java.time.LocalDateTime;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityServiceImpl implements SecurityService {

    @Autowired
    TokenRepository tokenRepository;

    @Override
    public Token retrieveToken(Token t) {
        if (t == null) {
            return generateNewToken();
        } else {
            Token tx = tokenRepository.findByToken(t.getToken());
            //Token tx =  tokenRepository.findById(t.getId()).get();
            if (tx == null) {
                return generateNewToken();
            } else {
                if (tx.getScadenza().compareTo(LocalDateTime.now()) > 0) {
                    // Non è scaduto
                    return tx;
                } else {
                    return generateNewToken();
                }
            }
        }
    }

    /**
     * Genera un nuovo token
     *
     * @return il nuovo token
     */
    private Token generateNewToken() {
        Random r = new Random();
        Long nc = r.nextLong();
        Token t = new Token(nc, LocalDateTime.now());
        return tokenRepository.save(t);
    }

}
