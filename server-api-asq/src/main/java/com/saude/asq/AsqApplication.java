package com.saude.asq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;


import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@EntityScan(basePackageClasses = {AsqApplication.class, Jsr310JpaConverters.class})
public class AsqApplication extends SpringBootServletInitializer {

    public static void main(String[] args) { SpringApplication.run(AsqApplication.class, args); }

}
