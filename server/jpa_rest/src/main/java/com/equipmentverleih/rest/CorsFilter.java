/**
 * 
 */
package com.equipmentverleih.rest;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

/**
 * @author nicoz
 *
 */
@Provider
public class CorsFilter implements ContainerResponseFilter {
	@Override
	public void filter(ContainerRequestContext request, ContainerResponseContext response) {
		response.getHeaders().add("Access-Control-Allow-Origin", "*");
		response.getHeaders().add("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,PUT,OPTIONS");
		response.getHeaders().add("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type");
	}

}
