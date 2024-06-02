package com.example.test.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

//    @Value("classpath:secret/app.pub")
//    RSAPublicKey publicKey;
//
//    @Value("classpath:secret/app.key")
//    RSAPrivateKey privateKey;
//
//    @Bean
//    public JwtDecoder jwtDecoder() {
//        return NimbusJwtDecoder.withPublicKey(this.publicKey).build();
//    }
//
//    @Bean
//    public JwtEncoder jwtEncoder() {
//        JWK jwk = new RSAKey.Builder(this.publicKey)
//                .privateKey(this.privateKey)
//                .build();
//
//        JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));
//        return new NimbusJwtEncoder(jwks);
//    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf-> csrf.disable());

//        http.authorizeRequests()
//                .requestMatchers("/api/member/signup", "/api/member/login").permitAll()
//                .requestMatchers("/api/member/info/{id}").authenticated()
//                .requestMatchers("/api/member/list").hasRole("ADMIN")
//                .anyRequest().authenticated()
//                .and()
//            .formLogin()
//                .and()
//            .logout()
//                .logoutUrl("/api/member/logout")
//                .permitAll();

        return http.build();
    }
}
