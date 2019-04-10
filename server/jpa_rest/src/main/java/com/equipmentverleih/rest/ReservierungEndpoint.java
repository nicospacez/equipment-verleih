/**
 * 
 */
package com.equipmentverleih.rest;

import java.util.ArrayList;
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

import com.equipmentverleih.dao.ReservierungDao;
import com.equipmentverleih.dao.VerleihDao;
import com.equipmentverleih.dto.ReservierungDto;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.Reservierung;
import com.equipmentverleih.model.Verleih;
import com.equipmentverleih.repository.ReservierungRepository;
import com.equipmentverleih.repository.VerleihRepository;
import com.equipmentverleih.response.ReservierungResponse;

/**
 * @author nicoz
 *
 */

@Path("/reservierung")
@Produces({ MediaType.APPLICATION_JSON })
@Consumes({ MediaType.APPLICATION_JSON })

@Transactional
public class ReservierungEndpoint {
	@Inject
	Logger log;
	@Inject
	ReservierungDao dao;
	@Inject
	ReservierungRepository repo;

	@POST
	public void create(Reservierung entity) {
		log.debug("creating reservierung: " + entity.toString());
		repo.create(entity);
	}

	@GET
	@Path("/findLatestReservierung/{produktId}")
	public ReservierungResponse getProduktReservierung(@PathParam("produktId") Long produktId) {
		ReservierungResponse response = new ReservierungResponse();

		try {
			List<Reservierung> reservierungen = dao.findLatestReservierung(produktId);
			List<ReservierungDto> reservierungList = new ArrayList<>();
			for (Reservierung r : reservierungen) {
				reservierungList.add(r.toDto());
			}

			response.setReservierungDtoList(reservierungList);
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (!response.getReservierungDtoList().isEmpty()) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}

	@GET
	@Path("/findUsersReservierung/{userId}")
	public ReservierungResponse getUserReservierung(@PathParam("userId") Long userId) {
		ReservierungResponse response = new ReservierungResponse();

		try {
			List<Reservierung> resrvierungen = dao.findOpenUserReservierung(userId);
			List<ReservierungDto> reservierungList = new ArrayList<>();
			for (Reservierung r : resrvierungen) {
				reservierungList.add(r.toDto());
			}
			response.setReservierungDtoList(reservierungList);
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (!response.getReservierungDtoList().isEmpty()) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}

}
