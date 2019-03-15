/**
 * 
 */
package com.equipmentverleih.rest;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

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
@Path("jwt")
public class JwtResource {

    @Inject
    UserRepository repo;
	
    @Inject
	Logger log;
	
    @POST
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
    
	@POST
	@Path("/createUser")
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(User entity) {
		log.debug("creating user: " + entity.toString());
		repo.create(entity);
	}

}
