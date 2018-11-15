package com.equipmentverleih.rest;

import java.util.LinkedList;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.VerleihDao;
import com.equipmentverleih.dto.VerleihDto;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.Verleih;
import com.equipmentverleih.repository.VerleihRepository;
import com.equipmentverleih.response.UserResponse;
import com.equipmentverleih.response.VerleihResponse;

/**
 * @author nicoz
 *
 */

@Path("/verleih")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})

@Transactional
public class VerleihEndpoint {

	@Inject Logger log;
	@Inject VerleihDao dao;
    @Inject VerleihRepository repo; //= new UserRepository();
    
	@GET
	public List<VerleihDto> findAll() {
		log.debug("findAllVerleih...");
		List<Verleih> verleihList = dao.findAll();
		List<VerleihDto> verleihDtoList = new LinkedList<>();
		for (Verleih verleih : verleihList) {
			verleihDtoList.add(verleih.toDto());
		}

		return verleihDtoList;
	}
	
	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public VerleihResponse find(@PathParam("id") Long id) {

		VerleihResponse response = new VerleihResponse();
		try {
			response.setVerleihDto(repo.find(id).toDto());
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (response.getVerleihDto() != null) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}
	
	@GET
	@Path("/findByProduktId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public VerleihResponse findByProductId(@PathParam("id") int id) {

		VerleihResponse response = new VerleihResponse();
		try {
			response.setVerleihDto(dao.findByProduktId(id).toDto());
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (response.getVerleihDto() != null) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}
	
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(Verleih entity) {
    	log.debug("creating verleih: "+entity.toString());
        repo.create(entity);
    }

}