package com.amir.rest.webservices.restfulwebservices.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

// Using JPA and Repository to implement User as an Entity using H2 in-memory database
@RestController
public class UserJPAResource {

// using JPA and in-memory Db H2
//	@Autowired
//	private UserDaoService_DeprecatedNoH2 service;

	@Autowired
	private UserRepository userRepository;

	//retriveAllUsers-
	@GetMapping("/jpa/users")
	public List<User> retrieveAllUser()
	{
		return userRepository.findAll();
	}


	//retriveAllUsers-
	@GetMapping("/jpa/users_sortById")
	public List<User> retrieveAllUser_sortById()
	{
         List <User> res = userRepository.findAll();
		Collections.sort(res);
		return res;
	}

	//retriveAllUsers-
	@GetMapping("/jpa/users_sortByType")
	public List<User> retrieveAllUser_sortByType()
	{
		List <User> res = userRepository.findAll();
		Comparator<User> rankType =  new Comparator<User>() {
			public int compare(User s1, User s2) {
				return s1.getType() - s2.getType();
			}
		};
		Collections.sort(res, rankType);

		return res;
	}


//	
//	@GetMapping("/users/{id}")
// public User retriveUser(@PathVariable int id)
// {
//	 	  User user = service.findOne(id);
//	 	  
//	 	  if (user == null)
//	 	  { throw new UserNotFoundException("id-"+ id);
//	 	  }
//	 	  
//	 	  
//	 	  
//	 	  return user;
// }
//	
	
// Complemented with HATEoas to return extra information
	@GetMapping("/jpa/users/{id}")
	public EntityModel<User> retrieveUser(@PathVariable int id) {
		Optional<User> user = userRepository.findById(id);
		
		if(user.isEmpty())
			throw new UserNotFoundException("id-"+ id);
		
		
		//"all-users", SERVER_PATH + "/users"
		//retrieveAllUsers
		EntityModel<User> resource = EntityModel.of(user.get());
		
		WebMvcLinkBuilder linkTo = 
				linkTo(methodOn(this.getClass()).retrieveAllUser_sortById());
		
		resource.add(linkTo.withRel("all-users-sorted-byId"));
		
		//HATEOAS
		
		return resource;
	}


	@DeleteMapping("/jpa/users/{id}")
 public void deleteUser(@PathVariable int id)
 {
	 	   userRepository.deleteById(id);

 }
	
	
	@PostMapping("/jpa/users")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user)
	{
		User savedUser = userRepository.save(user);

		//returning the generated ID in the server to the request
		URI location = ServletUriComponentsBuilder.
		  fromCurrentRequest()
		  .path("/{id}")
		  .buildAndExpand(savedUser.getId()).toUri();
		
		return ResponseEntity.created(location).build();
	}

	@PostMapping("/jpa/users/update/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @Valid @RequestBody User user)
	{


		Optional<User> us = userRepository.findById(id);

		if(us.isEmpty())
			throw new UserNotFoundException("id-"+ id);

		User ur = us.get();
		ur.setName(user.getName());
		ur.setType(user.getType());
		ur.setDescription(user.getDescription());
		ur.setCreationTime(user.getCreationTime());

		deleteUser(id);
		//created
		User savedUser = userRepository.save(user);

		URI location = ServletUriComponentsBuilder.
				fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(savedUser.getId()).toUri();

		return ResponseEntity.created(location).build();


	}
	
	
}
