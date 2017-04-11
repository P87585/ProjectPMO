package id.co.pegadaian.pmo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot - REST JSWITCH!";
    }
	
	
	@RequestMapping("/test")
    public String test() {
        return "Greetings from Spring Boot - REST JSWITCH SECURE!";
    }

}
