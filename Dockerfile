FROM openjdk:12
ADD target/restful-web-services.jar restful-web-services.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar", "restful-web-services.jar"]

