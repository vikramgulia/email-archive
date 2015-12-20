package com.barley;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.barley")
public class Application {
    public static void main(String[] args) {
        System.out.println("######## Starting the application now ########");
        SpringApplication.run(Application.class, args);
        System.out.println("######## Application load finished ########");
    }
}