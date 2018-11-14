package com.equipmentverleih.dto;

import com.equipmentverleih.model.Produkt;

/**
 * @author nicoz
 *
 */
public class ProduktDto implements Transferable<Produkt>{

	
	Long produktId;
	String bezeichnung;
	String inventurnummer;
	String kurzbezeichnung;
	String langbezeichnung;
	String marke;
	String seriennummer;
	
	KategorieDto kategorie;
	VerleihDto verleih;
	
	
	
	public ProduktDto(Long produktId, String bezeichnung, String inventurnummer, String kurzbezeichnung,
			String langbezeichnung, String marke, String seriennummer, KategorieDto kategorie) {
		super();
		this.produktId = produktId;
		this.bezeichnung = bezeichnung;
		this.inventurnummer = inventurnummer;
		this.kurzbezeichnung = kurzbezeichnung;
		this.langbezeichnung = langbezeichnung;
		this.marke = marke;
		this.seriennummer = seriennummer;
		this.kategorie = kategorie;
		this.verleih = verleih;
	}

	@Override
	public Produkt toEntity() {
		// TODO Auto-generated method stub
		return new Produkt(kurzbezeichnung, inventurnummer, seriennummer, marke, bezeichnung, langbezeichnung);
	}

	@Override
	public boolean isValid() {
		// TODO Auto-generated method stub
		return this.kurzbezeichnung != null &&
				this.inventurnummer != null &&
				this.seriennummer != null &&
				this.marke != null &&
				this.bezeichnung != null &&
				this.langbezeichnung != null;
	}

	public Long getProduktId() {
		return produktId;
	}

	public void setProduktId(Long produktId) {
		this.produktId = produktId;
	}

	public String getBezeichnung() {
		return bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}

	public String getInventurnummer() {
		return inventurnummer;
	}

	public void setInventurnummer(String inventurnummer) {
		this.inventurnummer = inventurnummer;
	}

	public String getKurzbezeichnung() {
		return kurzbezeichnung;
	}

	public void setKurzbezeichnung(String kurzbezeichnung) {
		this.kurzbezeichnung = kurzbezeichnung;
	}

	public String getLangbezeichnung() {
		return langbezeichnung;
	}

	public void setLangbezeichnung(String langbezeichnung) {
		this.langbezeichnung = langbezeichnung;
	}

	public String getMarke() {
		return marke;
	}

	public void setMarke(String marke) {
		this.marke = marke;
	}

	public String getSeriennummer() {
		return seriennummer;
	}

	public void setSeriennummer(String seriennummer) {
		this.seriennummer = seriennummer;
	}

	public KategorieDto getKategorie() {
		return kategorie;
	}

	public void setKategorie(KategorieDto kategorie) {
		this.kategorie = kategorie;
	}

	public VerleihDto getVerleih() {
		return verleih;
	}

	public void setVerleih(VerleihDto verleih) {
		this.verleih = verleih;
	}
	
	

}
