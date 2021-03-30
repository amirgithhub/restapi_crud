package com.amir.rest.webservices.restfulwebservices.user;

import java.sql.Timestamp;
import java.util.Comparator;
import java.util.Date;

import javax.validation.constraints.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

//implementing CRUD on user as an Entity using Repository which builds H2 in-memory DB schemaa
@ApiModel(description="All details about the Entity user.")
@Entity
public class User implements Comparable< User > {
	@Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", name='" + name + '\'' +
				", type=" + type +
				", description='" + description + '\'' +
				", creationTime=" + creationTime +
				'}';
	}

	@Id
@GeneratedValue
private Integer id;

@Size(min=3,message="Name should have at least 3 characters")
@ApiModelProperty(notes="Name should have at least 3 characters")
private String name;

@Min(value = 1, message = "Type should not be less than 1")
@Max(value = 99990, message = "Type should not be greater than 99990")
@ApiModelProperty(notes="type must be positive less than 9990")
private Integer type;

@Size(min=5,message="Description should have at least 5 characters")
@ApiModelProperty(notes="Description should have at least 5 characters")
private String description;


@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
@ApiModelProperty(notes="Creation time should be in the past or now and its pattern is yyyy-MM-dd HH:mm:ss ")
private Timestamp creationTime;

public Integer getId() {
	return id;
}
public User() {

}
public User(String name) {
		super();
		this.name = name;

	}
	public User( String name, Timestamp creationTime) {
		super();

		this.name = name;
		this.creationTime = creationTime;
	}

public User(Integer id, String name, Integer type, String description, Timestamp creationTime) {
	super();
	this.id = id;
	this.name = name;
	this.type = type;
	this.description=description;
	this.creationTime = creationTime;
}
	public User( String name, Integer type, String description, Timestamp creationTime) {
		super();
		this.name = name;
		this.type = type;
		this.description=description;
		this.creationTime = creationTime;
	}


	public User(Integer id, String name, Timestamp creationtime) {
		super();
		this.id = id;
		this.name = name;
		this.creationTime = creationtime;
	}

public void setId(Integer id) {
	this.id = id;
}
public String getName() {
	return name;
}
public int getType() {
		return type;
	}
public void setName(String name) {
	this.name = name;
}
public void setType(Integer type) {
		this.type = type;
	}
public String getDescription() {
		return description;
	}
public void setDescription(String descr) {
		this.description = descr;
	}



public Timestamp getCreationTime() {
	return this.creationTime;
}
public void setCreationTime(Timestamp crDate) {
	this.creationTime = crDate;
}

	@Override
	public int compareTo(User o) {
		return this.getId().compareTo(o.getId());
	}

}
