package com.nil;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/vue")
public class MainController {

	@RequestMapping("/home")
    public String vue(Model model){
    	System.out.println("test");
    	model.addAttribute("message", "test");
        return "vue/index";
    }
	
}