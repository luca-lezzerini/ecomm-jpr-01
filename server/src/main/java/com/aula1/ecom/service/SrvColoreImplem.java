
package com.aula1.ecom.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author aless
 */
    @Service
public class SrvColoreImpl implements SrvColore{
    
   @Autowired
   RepColore repColore;
   
   @Override
    public List<ColoreDto> coloreTipo() {
        return repColore.findAll();
    
}
