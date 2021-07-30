package com.nil;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class MainController {

	 @RequestMapping("/")
   public RedirectView home(){
       return new RedirectView("/home");
       
   }
}