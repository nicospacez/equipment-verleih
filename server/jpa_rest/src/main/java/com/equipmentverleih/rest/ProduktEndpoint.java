package com.equipmentverleih.rest;

import java.lang.reflect.ReflectPermission;
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
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.ProduktDao;
import com.equipmentverleih.dto.ProduktDto;
import com.equipmentverleih.dto.UserDto;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.Produkt;
import com.equipmentverleih.model.User;
import com.equipmentverleih.repository.ProduktRepository;
import com.equipmentverleih.response.ProduktResponse;

@Path("/produkt")
@Produces({ MediaType.APPLICATION_JSON })
@Consumes({ MediaType.APPLICATION_JSON })

@Transactional
public class ProduktEndpoint {
	@Inject
	Logger log;
	@Inject
	ProduktDao dao;
	@Inject
	ProduktRepository repo; // = new UserRepository();

	@GET
	public ProduktResponse findAll() {
		log.debug("findAllProdukt...");

		ProduktResponse response = new ProduktResponse();
		List<ProduktDto> produktDtoList = new LinkedList<>();

		List<Produkt> produktList = dao.findAll();
		for (Produkt produkt : produktList) {
			produktDtoList.add(produkt.toDto());
		}
		response.setProduktDtoList(produktDtoList);

		if (response.getProduktDto() != null || !response.getProduktDtoList().isEmpty()) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}

	@GET
	@Path("/range/{id}")
	public List<Produkt> findRange(@PathParam("id") int id) {
		return dao.findRange(id);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(Produkt entity) {
		log.debug("creating produkt: " + entity.toString());
		repo.create(entity);
	}
}
