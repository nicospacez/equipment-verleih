/**
 * 
 */
package com.equipmentverleih.dto;

import com.equipmentverleih.model.Kategorie;

/**
 * @author nicoz
 *
 */
public class KategorieDto implements Transferable<Kategorie>{

	Long kategorieId;
	String kurzbezeichnung;
	Kategorie kategorie;
	
	
	public KategorieDto(Long kategorieId, String kurzbezeichnung, Kategorie kategorie) {
		super();
		this.kategorieId = kategorieId;
		this.kurzbezeichnung = kurzbezeichnung;
		this.kategorie = kategorie;
	}

	@Override
	public Kategorie toEntity() {
		// TODO Auto-generated method stub
		return new Kategorie(this.kurzbezeichnung, this.kategorie);
	}

	@Override
	public boolean isValid() {
		// TODO Auto-generated method stub
		return this.kategorie != null &&
				this.kurzbezeichnung != null;
	}

	public Long getKategorieId() {
		return kategorieId;
	}

	public void setKategorieId(Long kategorieId) {
		this.kategorieId = kategorieId;
	}

	public String getKurzbezeichnung() {
		return kurzbezeichnung;
	}

	public void setKurzbezeichnung(String kurzbezeichnung) {
		this.kurzbezeichnung = kurzbezeichnung;
	}

	public Kategorie getKategorie() {
		return kategorie;
	}

	public void setKategorie(Kategorie kategorie) {
		this.kategorie = kategorie;
	}
	
	

}
