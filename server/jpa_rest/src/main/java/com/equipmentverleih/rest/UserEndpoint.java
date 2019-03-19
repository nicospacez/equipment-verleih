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
import javax.ws.rs.core.Response;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

import org.apache.log4j.Logger;

import com.equipmentverleih.dao.UserDao;
import com.equipmentverleih.dto.UserDto;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.User;
import com.equipmentverleih.repository.UserRepository;
import com.equipmentverleih.response.UserResponse;
import com.equipmentverleih.security.JwtBuilder;
import com.equipmentverleih.security.Password;

/**
 * @author nicoz
 *
 */

@Path("/user")
@Produces({ MediaType.APPLICATION_JSON })
@Consumes({ MediaType.APPLICATION_JSON })

@Transactional
public class UserEndpoint {
	@Inject
	Logger log;
	@Inject
	UserDao dao;
	@Inject
	UserRepository repo; // = new UserRepository();

	@GET
	public List<UserDto> findAll() {
		log.debug("findAllUsers...");
		List<User> userList = dao.findAll();
		List<UserDto> userDtoList = new LinkedList<>();
		for (User user : userList) {
			userDtoList.add(user.toDto());
		}

		return userDtoList;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(User entity) {
		log.debug("creating user: " + entity.toString());
		repo.create(entity);
	}

	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public UserResponse find(@PathParam("id") Long id) {

		UserResponse response = new UserResponse();
		try {
			response.setUserDto(repo.find(id).toDto());
		} catch (Exception e) {
			response.setError(ErrorNumber.ID_NOT_FOUND);
		}

		if (response.getUserDto() != null) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}

	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginUser(TempAuthUser reqUser) throws NoSuchAlgorithmException, InvalidKeySpecException {
		UserResponse response = new UserResponse();
		List<User> list = repo.findAll();
		User user = null;
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getUsername().equals(reqUser.getUsername())) {
				user = list.get(i);
			}
		}
		if (user != null) {
			if (Password.check(reqUser.getPassword(), user.getPassword())) {
				response.setToken(new JwtBuilder().create(user.getUsername()));
				response.setUserDto(user.toDto());
				response.setError(ErrorNumber.NO_ERROR);
				response.setState(SuccessState.SUCCESS);
				return Response.ok(response).build();
			}
		}
		response.setError(ErrorNumber.INVALID_CREDENTIALS);
		return Response.status(Response.Status.FORBIDDEN).entity(response).build();

	}

	@GET
	@Path("/getAllKlassen")
	@Produces(MediaType.APPLICATION_JSON)
	public List<String> getAllKlassen() {
		return dao.findKlassen();
	}

	@GET
	@Path("/getUserToKlasse/{klasse}")
	@Produces(MediaType.APPLICATION_JSON)
	public UserResponse getUserToKlasse(@PathParam("klasse") String klasse) {
		UserResponse response = new UserResponse();
		try {
			List<User> users = dao.findUserToKlasse(klasse);
			response.setUserDtoList(users);
		} catch (Exception e) {
			response.setError(ErrorNumber.REPO_ERROR);
		}
		
		if (response.getUserDtoList() != null) {
			response.setState(SuccessState.SUCCESS);
		}

		return response;
	}
}
