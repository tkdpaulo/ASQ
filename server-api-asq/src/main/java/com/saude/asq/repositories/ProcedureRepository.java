package com.saude.asq.repositories;

import com.saude.asq.entities.Procedure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProcedureRepository extends JpaRepository<Procedure, Long> {

    List<Procedure> findByProcedureNumber(Integer procedureNumber);


}