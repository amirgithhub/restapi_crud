package com.amir.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.assertj.core.internal.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

//Configuration file
//Enable Swagger
@Configuration
@EnableSwagger2
public class SwaggerConfig {

	  public static final Contact DEFAULT_CONTACT
      = new Contact(
      "Amir",
      "http://localhost:8080/jpa/users",
      "amir.imen@gmail.com");
  public static final ApiInfo DEFAULT_API_INFO
      = new ApiInfo(
      "Awsesome API Title",
      "Awesome Api Description",
      "1.0",
      "urn:tos",
      DEFAULT_CONTACT,
      "Apache 2.0",
      "http://www.apache.org/licenses/LICENSE-2.0",
      new ArrayList<>());
private static final Set<String> DEFAULT_PRODUCES_AND_CONSUMES =  
          new HashSet<String>(Arrays.asList("application/json","application/xml"));


	//Bean - Docket
	@Bean
	public Docket api()
	{
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.withClassAnnotation(RestController.class))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(DEFAULT_API_INFO)
				.produces(DEFAULT_PRODUCES_AND_CONSUMES)
				.consumes(DEFAULT_PRODUCES_AND_CONSUMES);
		
		
	}
	
	
	//Swagger 2
	
	//All the paths and apis
	
	
	
}
