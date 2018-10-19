package com.equipmentverleih.rest;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.ProduktDao;
import com.equipmentverleih.model.Produkt;
import com.equipmentverleih.repository.ProduktRepository;

@Path("/produkt")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})

@Transactional
public class ProduktEndpoint {
	@Inject Logger log;
	@Inject ProduktDao dao;
    @Inject ProduktRepository repo; //= new UserRepository();
    
	@GET
	public Response findAll() {
		log.debug("findAllProdukt...");
		return Response.ok(dao.findAll()).build();
	}
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Produkt entity) {
    	log.debug("creating produkt: "+entity.toString());
        repo.create(entity);
    }
}
