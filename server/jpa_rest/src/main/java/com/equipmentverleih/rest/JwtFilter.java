/**
 * 
 */
package com.equipmentverleih.rest;

import java.io.IOException;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.Provider;

import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.response.UserResponse;
import com.equipmentverleih.security.JwtBuilder;

/**
 * @author nicoz
 *
 */
@Provider
public class JwtFilter implements ContainerRequestFilter {

	@Override
	public void filter(ContainerRequestContext rc) throws IOException {
		if (rc.getUriInfo().getPath().contains("jwt") || rc.getMethod().equals("OPTIONS")) {
			return;
		}
		JwtBuilder jwt = new JwtBuilder();
		try {
			String[] auth = rc.getHeaderString("Authorization").split("\\s");
			String subject = jwt.checkSubject(auth[1]);
		} catch (Exception e) {
			UserResponse response = new UserResponse();
			response.setError(ErrorNumber.NOT_AUTHORIZED);
			response.setState(SuccessState.FAILURE);
			rc.abortWith(Response.status(Status.FORBIDDEN).entity(response).build());
		}
	}
}
