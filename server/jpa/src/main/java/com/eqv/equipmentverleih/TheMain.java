package com.eqv.equipmentverleih;

import java.io.IOException;
import java.net.URI;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.server.StaticHttpHandler;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

/**
 *
 * @author nicoz
 */
public class TheMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        // TODO code application logic here
        final String baseUrl = "http://localhost:2000/api";
        final ResourceConfig rc = new ResourceConfig().packages("com.eqv.equipmentverleih");
        final HttpServer server = GrizzlyHttpServerFactory.createHttpServer(URI.create(baseUrl), rc);
        final StaticHttpHandler httpHandler = new StaticHttpHandler("");
        server.getServerConfiguration().addHttpHandler(httpHandler, "/");
        System.out.println(String.format("Server startet at %s\nHit enter to stop ...", baseUrl));
        System.in.read();
        server.shutdown();
    }

}
