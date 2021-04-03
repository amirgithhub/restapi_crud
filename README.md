# restapi_crud

RestAPI with Java Spring. JPA, H2
Initially, the H2 in-memory DB has no data so you can create an entity, which is implements by the User class, by this request and sample request body. The Ids of the entities are auto-generated by H2 DB.

 http://localhost:8080/jpa/users/

{
    "name": "Amir",
     "type": "21",
     "description": "Developer",
    "creationTime": "2020-03-29 14:12:15"
}

Remember that +the pattern for creation time is pattern="yyyy-MM-dd HH:mm:ss"
			  +the name must have min length of 3
			  +the type is a number between 1<type<9990
			  +the description must have min length of 5
			  
The action 'Deletion' is just based on ID			  

---------------------------------------------
For the list of APIs, please refer to Swagger documentations: 

	http://localhost:8080/swagger-ui/
	http://localhost:8080/v2/api-docs
----------------------------------------------------------
	
The H2 UI is accessible in http://localhost:8080/h2-console	

Table name is : jdbc:h2:mem:mytestdb
	
 Docker hub Repository: 
dockerstudent62/restful-web-services 

image tag:latest2


For running the image   : docker run -p 8080:8080 [restful-web-services]


