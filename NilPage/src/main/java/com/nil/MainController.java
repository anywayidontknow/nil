package com.nil;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/vue")
    public String vue(){
    	System.out.println("test");
        return "vue/index";
    }
}