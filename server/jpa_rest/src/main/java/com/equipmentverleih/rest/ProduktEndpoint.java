package com.equipmentverleih.rest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import org.apache.commons.codec.binary.Base64;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
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
import com.equipmentverleih.repository.KategorieRepository;
import com.equipmentverleih.repository.ProduktRepository;
import com.equipmentverleih.response.ProduktResponse;

@Path("/produkt")
@Produces({ MediaType.APPLICATION_JSON })

@Transactional
public class ProduktEndpoint {
	@Inject
	Logger log;
	@Inject
	ProduktDao dao;

	@Inject
	KategorieDao katDao;

	@Inject
	ProduktRepository repo;
	@Inject
	KategorieRepository katRepo;

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

	@GET
	@Path("/disable/{id}")
	public void disableProduct(@PathParam("id") Long id) {
		Produkt produkt = repo.find(id);
		produkt.setDisabled(true);
		repo.edit(produkt);
	}

	@GET
	@Path("/toggleLocked/{id}")
	public void lockProduct(@PathParam("id") Long id) {
		Produkt produkt = repo.find(id);
		if (produkt.getLocked()) {
			produkt.setLocked(false);
		} else {
			produkt.setLocked(true);
		}
		repo.edit(produkt);
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(Produkt entity) {
		log.debug("creating produkt: " + entity.toString());
		entity.setLocked(false);
		entity.setDisabled(false);
		repo.create(entity);
	}

	@POST
	@Path("/csvUpload/{kategorie}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void uploadFile(@PathParam("kategorie") Long kategorie, String body) throws UnsupportedEncodingException {
		Kategorie kat = katRepo.find(kategorie);

		byte[] valueDecoded = Base64.decodeBase64(body);
		String str = new String(valueDecoded, "UTF8");
		System.out.println(str);
		boolean isFirst = true;
		for (String arr : str.split("\\r?\\n")) {
			if (!isFirst) {
				System.out.println(arr);
				String[] data = arr.split(";", -1);
				for (String out : data) {
					System.out.println("AYY: " + out);
				}
				Produkt p = new Produkt(data[0], data[5], data[3], data[2], data[1], data[1] + " " + data[2], null,
						kat);
				repo.create(p);
			}
			isFirst = false;
		}
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void update(Produkt entity) {
		log.debug("editing produkt: " + entity.toString());

		Produkt produkt = repo.find(entity.getProduktId());

		produkt.setBezeichnung(entity.getBezeichnung());
		produkt.setLangbezeichnung(entity.getLangbezeichnung());
		produkt.setKurzbezeichnung(entity.getKurzbezeichnung());
		produkt.setInventurnummer(entity.getInventurnummer());
		produkt.setMarke(entity.getMarke());
		produkt.setSeriennummer(entity.getSeriennummer());
		produkt.setFoto(entity.getFoto());

		Kategorie kategorie = katDao.findById(entity.getKategorie().getKategorieId());
		produkt.setKategorie(kategorie);

		repo.edit(produkt);
	}

	@POST
	@Path("/OLDcsvUpload/{kategorie}")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public String uploadFile(@FormDataParam("file") InputStream uploadedInputStream,
			@FormDataParam("file") FormDataContentDisposition fileDetail, @FormDataParam("path") String path,
			@PathParam("kategorie") Long kategorie) {

		String uploadedFileLocation = path + fileDetail.getFileName();
		writeToFile(uploadedInputStream, uploadedFileLocation);
		try {
			Files.lines(Paths.get(uploadedFileLocation)).skip(1).forEach(line -> {
				String[] data = line.split(";");
				Kategorie kategories = katDao.findById(kategorie);
				Produkt p = new Produkt(data[0], data[5], data[3], data[2], data[1], data[1] + " " + data[2], null,
						kategories);
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
