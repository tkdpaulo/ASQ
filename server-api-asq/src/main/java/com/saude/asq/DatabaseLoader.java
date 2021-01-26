package com.saude.asq;

import com.saude.asq.entities.Procedure;
import com.saude.asq.repositories.ProcedureRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader /*implements CommandLineRunner*/ {

//    private final ProcedimentoRepository repository;
    private static final Logger log = LoggerFactory.getLogger(DatabaseLoader.class);

    @Bean
    CommandLineRunner initDatabase(ProcedureRepository repository) {

        return args -> {
            log.info("Preloading " + repository.save(new Procedure(1234, 10, "M", "Sim")));
            log.info("Preloading " + repository.save(new Procedure(4567, 20, "M", "Sim")));
            log.info("Preloading " + repository.save(new Procedure(6789, 10, "F", "Sim")));
            log.info("Preloading " + repository.save(new Procedure(6789, 10, "M", "Sim")));
            log.info("Preloading " + repository.save(new Procedure(1234, 20, "M", "Sim")));
            log.info("Preloading " + repository.save(new Procedure(4567, 30, "F", "Sim")));
        };
    }
}
