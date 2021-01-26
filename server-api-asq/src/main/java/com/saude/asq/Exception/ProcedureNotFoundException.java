package com.saude.asq.Exception;

public class ProcedureNotFoundException extends RuntimeException {

    public ProcedureNotFoundException(Long id) {
        super("Não foi possivel encontrar o procedimento " + id);
    }

}
