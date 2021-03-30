package com.amir.rest.webservices.restfulwebservices.user;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
 
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@RestController
public class UserResource_DeprecatedNoH2 {

	
	@Autowired
	private UserDaoService_DeprecatedNoH2 service;
	
	
	//retriveAllUsers
	@GetMapping("/users")
	public List<User> retriveAllUser()
	{
		return service.findAll();
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
	
// HATEoas for use in class USERJPAResource with @ RestController 
	@GetMapping("/users/{id}")
	public EntityModel<User> retrieveUser(@PathVariable int id) {
		User user = service.findOne(id);
		
		if(user==null)
			throw new UserNotFoundException("id-"+ id);
		
		
		//"all-users", SERVER_PATH + "/users"
		//retrieveAllUsers
		EntityModel<User> resource = EntityModel.of(user);
		
		WebMvcLinkBuilder linkTo = 
				linkTo(methodOn(this.getClass()).retriveAllUser());
		
		resource.add(linkTo.withRel("all-users"));
		
		//HATEOAS
		
		return resource;
	}

	

	
	@DeleteMapping("/users/{id}")
 public void deleteUser(@PathVariable int id)
 {
	 	  User user = service.deleteById(id);
	 	  
	 	  if (user == null)
	 	  { throw new UserNotFoundException("id-"+ id);
	 	  }
	 	
 }
	
	
	@PostMapping("/users")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user)
	{
		User savedUser = service.save(user);
		
		//created
		
		URI location = ServletUriComponentsBuilder.
		  fromCurrentRequest()
		  .path("/{id}")
		  .buildAndExpand(savedUser.getId()).toUri();
		
		return ResponseEntity.created(location).build();
		
		
	}
	
	
	
	
}
