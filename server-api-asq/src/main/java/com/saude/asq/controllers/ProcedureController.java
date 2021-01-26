package com.saude.asq.controllers;

import com.saude.asq.entities.Procedure;
import com.saude.asq.repositories.ProcedureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProcedureController {

    @Autowired
    private final ProcedureRepository procedureRepository;

    @Autowired
    public ProcedureController(ProcedureRepository procedureRepository) {
        this.procedureRepository = procedureRepository;
    }

    @GetMapping("/procedures")
    public ResponseEntity<List<Procedure>> getAllProcedures(@RequestParam(required = false) Integer procedureNumber) {
        try {
            List<Procedure> procedures = new ArrayList<>();

            if (procedureNumber == null)
                procedures.addAll(procedureRepository.findAll());
            else
                procedures.addAll(procedureRepository.findByProcedureNumber(procedureNumber));

            if (procedures.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(procedures, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/procedures")
    public ResponseEntity<Procedure> createProcedure(@RequestBody Procedure procedure) {
        try {
            Procedure _procedure = procedureRepository
                    .save(new Procedure(
                            procedure.getProcedureNumber(),
                            procedure.getAge(),
                            procedure.getGenre(),
                            procedure.getPermission()));
            return new ResponseEntity<>(_procedure, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/procedures/{id}")
    public ResponseEntity<Procedure> getProcedureById(@PathVariable("id") long id) {
        Optional<Procedure> procedureData = procedureRepository.findById(id);

        return procedureData.map(procedure -> new ResponseEntity<>(procedure, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/procedures/{id}")
    public ResponseEntity<Procedure> updateProcedure(@PathVariable("id") long id, @RequestBody Procedure procedure) {
        Optional<Procedure> procedureData = procedureRepository.findById(id);

        if (procedureData.isPresent()) {
            Procedure _procedure = procedureData.get();
            _procedure.setProcedureNumber(procedure.getProcedureNumber());
            _procedure.setAge(procedure.getAge());
            _procedure.setGenre(procedure.getGenre());
            _procedure.setPermission(procedure.getPermission());
            return new ResponseEntity<>(procedureRepository.save(_procedure), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/procedures/{id}")
    public ResponseEntity<HttpStatus> deleteProcedure(@PathVariable("id") long id) {
        try {
            procedureRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/procedures")
    public ResponseEntity<HttpStatus> deleteAllProcedures() {
        try {
            procedureRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}