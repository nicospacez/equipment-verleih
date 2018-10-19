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

import com.equipmentverleih.dao.KategorieDao;
import com.equipmentverleih.model.Kategorie;
import com.equipmentverleih.repository.KategorieRepository;

@Path("/kategorie")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})

@Transactional
public class KategorieEndpoint {
	@Inject Logger log;
	@Inject KategorieDao dao;
    @Inject KategorieRepository repo; //= new UserRepository();
    
	@GET
	public Response findAll() {
		log.debug("findAllKategorie...");
		return Response.ok(dao.findAll()).build();
	}
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Kategorie entity) {
    	log.debug("creating kategorie: "+entity.toString());
        repo.create(entity);
    }
}
