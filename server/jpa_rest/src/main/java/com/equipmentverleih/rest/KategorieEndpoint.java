package com.equipmentverleih.rest;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.KategorieDao;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.Kategorie;
import com.equipmentverleih.repository.KategorieRepository;
import com.equipmentverleih.response.KategorieResponse;
import com.equipmentverleih.response.UserResponse;

@Path("/kategorie")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})

/**
 * @author nicoz
 *
 */
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
	
	/*
	 * Does not work but i don't know why LOL
	 * Causing: 
	 * 
	 * ERROR [org.jboss.resteasy.resteasy_jaxrs.i18n] (default task-1) RESTEASY002010:
	 * Failed to execute: javax.ws.rs.NotSupportedException: RESTEASY003065: Cannot consume content type  
	 */
	@Deprecated
	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public KategorieResponse find(@PathParam("id") Long id) {

		KategorieResponse response = new KategorieResponse();
		try {
			response.setKategorieDto(repo.find(id).toDto());
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (response.getKategorieDto() != null) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}

	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Kategorie entity) {
    	log.debug("creating kategorie: "+entity.toString());
        repo.create(entity);
    }
}
