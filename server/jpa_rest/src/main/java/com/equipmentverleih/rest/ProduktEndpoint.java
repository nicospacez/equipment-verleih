package com.equipmentverleih.rest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
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
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import com.equipmentverleih.dao.KategorieDao;
import com.equipmentverleih.dao.ProduktDao;
import com.equipmentverleih.dto.ProduktDto;
import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;
import com.equipmentverleih.model.Kategorie;
import com.equipmentverleih.model.Produkt;
import com.equipmentverleih.repository.ProduktRepository;
import com.equipmentverleih.response.ProduktResponse;

@Path("/produkt")
@Produces({ MediaType.APPLICATION_JSON })
@Consumes({ MediaType.APPLICATION_JSON, MediaType.MULTIPART_FORM_DATA})

@Transactional
public class ProduktEndpoint {
	@Inject
	Logger log;
	@Inject
	ProduktDao dao;

	@Inject
	KategorieDao katDao;

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
	@Path("/page/{id}")
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

	@POST
	@Path("/csvUpload/{kategorie}")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public String uploadFile(@FormDataParam("file") InputStream uploadedInputStream,
			@FormDataParam("file") FormDataContentDisposition fileDetail, @FormDataParam("path") String path,
			@PathParam("kategorie") Long kategorie) {

		String uploadedFileLocation = path + fileDetail.getFileName();
		writeToFile(uploadedInputStream, uploadedFileLocation);
		try {
			Files.lines(Paths.get(uploadedFileLocation)).skip(1).forEach(line -> {
				String[] data = line.split(";");
				List<Kategorie> kategories = katDao.findById(kategorie);
				Produkt p = new Produkt(data[0], data[5], data[3], data[2], data[1], data[1] + data[2], null,
						kategories.get(0));
				repo.create(p);
			});
		} catch (IOException ex) {
			return "Import FAILED.";
		}

		return "Import Ok";
	}

	private void writeToFile(InputStream uploadedInputStream, String uploadedFileLocation) {

		try {
			OutputStream out = new FileOutputStream(new File(uploadedFileLocation));
			int read = 0;
			byte[] bytes = new byte[1024];

			out = new FileOutputStream(new File(uploadedFileLocation));
			while ((read = uploadedInputStream.read(bytes)) != -1) {
				out.write(bytes, 0, read);
			}
			out.flush();
			out.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}
}
