package com.equipmentverleih.rest;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.UserDao;
import com.equipmentverleih.model.User;
import com.equipmentverleih.repository.UserRepository;

@Path("/user")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})

@Transactional
public class UserEndpoint {
	@Inject Logger log;
	@Inject UserDao dao;
    @Inject UserRepository repo; //= new UserRepository();

	
	@GET
	public Response findAll() {
		log.debug("findAll...");
		return Response.ok(dao.findAll()).build();
	}
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(User entity) {
    	log.debug("creating user: "+entity.toString());
        repo.create(entity);
    }
	
    @GET
    @Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public User find(@PathParam("id") Long id) {
        return repo.find(id);
    }
    
	
}
