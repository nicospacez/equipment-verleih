package com.equipmentverleih.rest;

import java.util.Date;
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

import com.equipmentverleih.dao.ProduktDao;
import com.equipmentverleih.dto.ProduktDto;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.Produkt;
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
			// log.debug(produkt.getVerleih().get(produkt.getVerleih().size()-1));
			log.debug(new Date());
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
	public ProduktResponse findRange(@PathParam("id") int id) {
		log.debug("findRangeProdukt: " + id + "...");

		ProduktResponse response = new ProduktResponse();
		List<ProduktDto> produktDtoList = new LinkedList<>();

		List<Produkt> produktList = dao.findRange(id);
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
	@Path("/findById/{id}")
	public ProduktResponse findById(@PathParam("id") Long id) {

		ProduktResponse response = new ProduktResponse();

		try {
			ProduktDto produktDto = repo.find(id).toDto();
			response.setProduktDto(produktDto);
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (response.getProduktDto() != null) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(Produkt entity) {
		log.debug("creating produkt: " + entity.toString());
		repo.create(entity);
	}
}
