package com.eqv.equipmentverleih;

import com.eqv.entities.User;
import com.eqv.persistance.UserRepository;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author nicoz
 */
@Path("users")
public class UserResource {

    private UserRepository rep = new UserRepository();

    @GET
    @Path("allUsers")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> allForms() {
        System.out.println("TEST");
        return rep.findAllUsers();
    }

    @GET
    @Path("addUser")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> addUser() {
        User u = new User("Nico", "Zandomeneghi", "it150059", "5bhtim", 15, false);
        u.setFirstname("Max");
        u.setLastname("Mustermann");
        rep.createUser(u);
        return rep.findAllUsers();
    }

    @POST
    @Path("test")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response crunchifyREST(InputStream incomingData) {
        StringBuilder sb = new StringBuilder();
        try {
            BufferedReader in = new BufferedReader(new InputStreamReader(incomingData));
            String line = null;
            while ((line = in.readLine()) != null) {
                sb.append(line);
            }
        } catch (Exception e) {
            System.out.println("Error Parsing: - ");
        }
        System.out.println("Data Received: " + sb.toString());

        // return HTTP response 200 in case of success
        return Response.status(200).entity(sb.toString()).build();
    }
}
