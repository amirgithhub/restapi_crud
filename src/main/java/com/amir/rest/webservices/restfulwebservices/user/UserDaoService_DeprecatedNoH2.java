package com.amir.rest.webservices.restfulwebservices.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;


import org.springframework.stereotype.Component;



//First version of my implementaion of user as an Enitity which used an static array but I changed it to H2 in next versions
@Component
public class UserDaoService_DeprecatedNoH2 {

	private static List<User> users = new ArrayList<User>();
	private static int usersCount = 3;
	static {
	//	users.add(new User(1,"Adam", 1, "Computer monitor", new Date()));
	//	users.add(new User(2,"Amir", 1, "Computer Mouse", new Date()));
		
	}
	
	
 public List<User> findAll() {
	 return users; 
 }
	
 public User save (User user) {
	 if(user.getId()==null)
	 {user.setId(++usersCount);}
	 
	 users.add(user);
	 return user;}
 
 
 public User findOne(int id)
 {
	 for (User us:users) {
		 
		  if(us.getId() ==id)
			 return us;
		
	 }
	return null;
	 
	 
	 
 } 
 

 public User deleteById(int id)
 {
	 
	 Iterator<User> iterator = users.iterator();
	 while(iterator.hasNext()) {
		 User user = iterator.next();
		 if(user.getId() == id) {
			 iterator.remove();
			 return user;
			 
		 }
		 
	 }
	 

	return null;
	 
	 
	 
 } 

	
	
	
}
