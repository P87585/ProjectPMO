package id.co.pegadaian.pmo;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String SQL_LOGIN = "select username, password, '1' as enabled "
            + "from PMO_USER where username= ? ";
    private static final String SQL_PERMISSION = "select u.username, 'USSER' as name "
            + "from PMO_USER u "
            + "where u.username = ?";
    
    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
//                .passwordEncoder(passwordEncoder())
                .usersByUsernameQuery(SQL_LOGIN)
                .authoritiesByUsernameQuery(SQL_PERMISSION);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http
    	.authorizeRequests()
    	.antMatchers("/css/**").permitAll()
    	.antMatchers("/public.html").permitAll()
        .anyRequest().authenticated()
        .and().formLogin().permitAll()
        .and().logout().permitAll();
    }
    
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    
    @Override
    @Bean
    public UserDetailsService userDetailsServiceBean() throws Exception{
        return super.userDetailsServiceBean();
    }
}
