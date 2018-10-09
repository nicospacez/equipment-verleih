package com.equipmentverleih.rest;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.*;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.UserDao;

@Path("/user")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})

@Transactional
public class UserEndpoint {
	@Inject Logger log;
	@Inject UserDao dao;
	
	@GET
	public Response findAll() {
		log.debug("findAll...");
		return Response.ok(dao.findAll()).build();
	}
}
