package id.co.pegadaian.pmo.security;

import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@EnableWebSecurity(debug = true)
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableResourceServer
public class ResourceSecurityConfig extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
        	.antMatchers("/swagger-ui.html").permitAll()
        	.antMatchers("/swagger-resources/*").permitAll()
        	.anyRequest().authenticated()
        	.and()
        	.exceptionHandling().authenticationEntryPoint(new AuthEntryPoint());
    }
    
}