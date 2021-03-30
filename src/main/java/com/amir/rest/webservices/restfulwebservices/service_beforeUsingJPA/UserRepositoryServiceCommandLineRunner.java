package com.amir.rest.webservices.restfulwebservices.service_beforeUsingJPA;

import com.amir.rest.webservices.restfulwebservices.user.User;
import com.amir.rest.webservices.restfulwebservices.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Component
public class UserRepositoryServiceCommandLineRunner implements CommandLineRunner {


    private static final Logger log =
            LoggerFactory.getLogger(UserRepositoryServiceCommandLineRunner.class);


    @Autowired
    private UserRepository userRepository;
    @Override
    public void run(String... args) throws Exception {
      //  User user = new User("Jack", new Date());
      //   userRepository.save(user);

        Optional<User> userWithIdOne=userRepository.findById(1);
        List<User> users = userRepository.findAll();
         log.info("All users" + users);
    }
}
