package com.finyze.security;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI finyzeOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Finyze API")
                        .description("API documentation for the Finyze portfolio tracker")
                        .version("v1.0")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")))
                .externalDocs(new ExternalDocumentation()
                        .description("Finyze GitHub")
                        .url("https://github.com/Karol-Cedro/Finyze"));
    }
}

