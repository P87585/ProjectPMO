package id.co.pegadaian.pmo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class PegadaianMPOAuth {

	public static void main(String[] args) {
		SpringApplication.run(PegadaianMPOAuth.class, args);
	}
	
	@GetMapping("/protected")
    public void protectedPage() {}
}
