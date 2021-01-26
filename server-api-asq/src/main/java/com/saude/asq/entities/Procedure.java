package com.saude.asq.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Procedure {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private Integer procedureNumber;

    private Integer age;

    private String genre;

    private String permission;

    public Procedure() {}

    public Procedure(Integer procedureNumber, Integer age, String genre, String permission){
        this.procedureNumber = procedureNumber;
        this.age = age;
        this.genre = genre;
        this.permission = permission;
    }

    @Override
    public int hashCode() { return Objects.hash(id, procedureNumber, age, genre, permission); }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Integer getProcedureNumber() {
        return procedureNumber;
    }

    public void setProcedureNumber(Integer numeroProcedimento) {
        this.procedureNumber = numeroProcedimento;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String sexo) {
        this.genre = sexo;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permissao) {
        this.permission = permissao;
    }

    @Override
    public String toString() {
        return "Procedure{" +
                "id=" + id +
                ", procedureNumber='" + procedureNumber + '\'' +
                ", age='" + age + '\'' +
                ", genre='" + genre + '\'' +
                ", permission='" + permission + '\'' +
                '}';
    }
}