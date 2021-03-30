package com.amir.rest.webservices.restfulwebservices.service_beforeUsingJPA;

import com.amir.rest.webservices.restfulwebservices.user.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;


@Repository
@Transactional
public class UserDaoService2 {


    @PersistenceContext
    private EntityManager entityManager;


    public Integer insert (User user)
    {

        entityManager.persist(user);
        return user.getId();


    }


}
