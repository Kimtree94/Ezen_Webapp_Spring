package com.Ezenweb.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    /*리액트 사용시 불필요 */
//    @GetMapping("/")
//    public Resource getloginMno(){
//        return new ClassPathResource("templates/index.html");
//    }
}
