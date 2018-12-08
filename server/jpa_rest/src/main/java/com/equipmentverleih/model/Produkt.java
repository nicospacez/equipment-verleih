package com.equipmentverleih.model;

import java.io.Serializable;
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.equipmentverleih.dto.ProduktDto;
import com.equipmentverleih.dto.VerleihDto;
import com.equipmentverleih.enums.ProduktStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author nicoz
 */
@Table(name = "eqv_produkt")
@Entity
public class Produkt implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long produktId;

	private String kurzbezeichnung, inventurnummer, seriennummer, marke, bezeichnung, langbezeichnung;

	private byte[] foto;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "produkt")
	private List<Verleih> verleih;

	@ManyToOne
	@JoinColumn(name = "kategorieId")
	private Kategorie kategorie;

	public Produkt() {
	}

	public Produkt(String kurzbezeichnung, String inventurnummer, String seriennummer, String marke, String bezeichnung,
			String langbezeichnung, Kategorie kategorie, List<Verleih> verleih) {
		this.kurzbezeichnung = kurzbezeichnung;
		this.inventurnummer = inventurnummer;
		this.seriennummer = seriennummer;
		this.marke = marke;
		this.bezeichnung = bezeichnung;
		this.langbezeichnung = langbezeichnung;
		this.kategorie = kategorie;
		this.verleih = verleih;
		this.foto = foto;
	}

	public Kategorie getKategorie() {
		return kategorie;
	}

	public void setKategorie(Kategorie kategorie) {
		this.kategorie = kategorie;
	}

	public Long getProduktId() {
		return produktId;
	}

	public void setProduktId(Long produktId) {
		this.produktId = produktId;
	}

	public String getKurzbezeichnung() {
		return kurzbezeichnung;
	}

	public void setKurzbezeichnung(String kurzbezeichnung) {
		this.kurzbezeichnung = kurzbezeichnung;
	}

	public String getInventurnummer() {
		return inventurnummer;
	}

	public void setInventurnummer(String inventurnummer) {
		this.inventurnummer = inventurnummer;
	}

	public String getSeriennummer() {
		return seriennummer;
	}

	public void setSeriennummer(String seriennummer) {
		this.seriennummer = seriennummer;
	}

	public String getMarke() {
		return marke;
	}

	public void setMarke(String marke) {
		this.marke = marke;
	}

	public String getBezeichnung() {
		return bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}

	public String getLangbezeichnung() {
		return langbezeichnung;
	}

	public void setLangbezeichnung(String langbezeichnung) {
		this.langbezeichnung = langbezeichnung;
	}

	public byte[] getFoto() {
		return foto;
	}

	public void setFoto(byte[] foto) {
		this.foto = foto;
	}

	public List<Verleih> getVerleih() {
		return verleih;
	}

	public void setVerleih(List<Verleih> verleih) {
		this.verleih = verleih;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (produktId != null ? produktId.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		// TODO: Warning - this method won't work in the case the id fields are not set
		if (!(object instanceof Produkt)) {
			return false;
		}
		Produkt other = (Produkt) object;
		if ((this.produktId == null && other.produktId != null)
				|| (this.produktId != null && !this.produktId.equals(other.produktId))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "com.eqv.entities.Produkt[ id=" + produktId + " ]";
	}

	public ProduktDto toDto() {
		// TODO Auto-generated method stub
		ProduktStatus status = ProduktStatus.FREI;
		DateFormat sdff = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

		if (!this.verleih.isEmpty()) {
			if (this.verleih.get(this.verleih.size()).getEndDate() == new Date()) {
				status = ProduktStatus.VERLIEHEN;
			}
		}
		
		String verleihId = "";
		for (Verleih v : this.verleih) {
			verleihId = v.getVerleihId().toString();
		}

		return new ProduktDto(produktId, bezeichnung, inventurnummer, kurzbezeichnung, langbezeichnung, marke,
				seriennummer, kategorie.toDto(), verleihId, status);
	}

}
