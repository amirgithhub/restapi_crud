package com.amir.rest.webservices.restfulwebservices.service_beforeUsingJPA;

import com.amir.rest.webservices.restfulwebservices.user.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.DateTimeException;
import java.util.Date;

@Component
public class UserDaoServiceCommandLineRunner implements CommandLineRunner {


    private static final Logger log =
            LoggerFactory.getLogger(UserDaoServiceCommandLineRunner.class);


    @Autowired
    private UserDaoService2 userDaoService;
    @Override
    public void run(String... args) throws Exception {
     //   User user = new User("Jack", new Date());
   //     Integer insert = userDaoService.insert(user);
      //   log.info("New user is created:" + user);
    }
}
