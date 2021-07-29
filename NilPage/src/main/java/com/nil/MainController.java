package com.nil;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/vue")
public class MainController {

	@RequestMapping("/home")
    public String home(){
        return "vue/index";
    }
	
	@RequestMapping("/")
    public String defualt(){
		
        return home();
    }
	
}