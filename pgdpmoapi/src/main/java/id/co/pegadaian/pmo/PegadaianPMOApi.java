package id.co.pegadaian.pmo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class PegadaianPMOApi {
	public static void main(String[] args) {
		SpringApplication.run(PegadaianPMOApi.class, args);
	}
	
	@Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.any())                          
          .build()
          .apiInfo(apiInfo());                                           
    }
    
    private ApiInfo apiInfo() {
        ApiInfo apiInfo = new ApiInfo(
          "Aplikasi API PMO",
          "API PMO.",
          "Syarat dan Ketentuan",
          "Silahkan digunakan sewajarnya",
          new Contact("Pegadaian", "http://pegadaian.co.id", "info@pegadaian.co.id"),
          "Apache License 2.0",
          "https://www.apache.org/licenses/LICENSE-2.0");
        return apiInfo;
    }
}
