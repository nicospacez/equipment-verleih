package com.equipmentverleih.model;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Base64;
import java.util.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.equipmentverleih.dto.ProduktDto;
import com.equipmentverleih.enums.ProduktStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author nicoz
 */
@Table(name = "eqv_produkt")
@Entity
@Where(clause = "disabled = false")
public class Produkt implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long produktId;

	private String kurzbezeichnung, inventurnummer, seriennummer, marke, bezeichnung, langbezeichnung;

	@Column(columnDefinition = "LONGTEXT")
	private String foto;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "produkt")
	private List<Verleih> verleih;

	@ManyToOne
	@JoinColumn(name = "kategorieId")
	private Kategorie kategorie;

	@ManyToOne
	private Produkt produkt;

	private Boolean disabled;

	private Boolean locked;

	public Produkt() {
	}

	public Produkt(String kurzbezeichnung, String inventurnummer, String seriennummer, String marke, String bezeichnung,
			String langbezeichnung, String foto, Kategorie kategorie) {
		this.kurzbezeichnung = kurzbezeichnung;
		this.inventurnummer = inventurnummer;
		this.seriennummer = seriennummer;
		this.marke = marke;
		this.bezeichnung = bezeichnung;
		this.langbezeichnung = langbezeichnung;
		this.kategorie = kategorie;
		this.foto = foto;
		this.disabled = false;
		this.locked = false;
	}

	public Produkt(String kurzbezeichnung, String inventurnummer, String seriennummer, String marke, String bezeichnung,
			String langbezeichnung, String foto, Kategorie kategorie, List<Verleih> verleih) {
		this.kurzbezeichnung = kurzbezeichnung;
		this.inventurnummer = inventurnummer;
		this.seriennummer = seriennummer;
		this.marke = marke;
		this.bezeichnung = bezeichnung;
		this.langbezeichnung = langbezeichnung;
		this.kategorie = kategorie;
		this.verleih = verleih;
		this.foto = foto;
		this.disabled = false;
		this.locked = false;
	}

	public Produkt getProdukt() {
		return produkt;
	}

	public void setProdukt(Produkt produkt) {
		this.produkt = produkt;
	}

	public Boolean getLocked() {
		return locked;
	}

	public void setLocked(Boolean locked) {
		this.locked = locked;
	}

	public Boolean getDisabled() {
		return disabled;
	}

	public void setDisabled(Boolean disabled) {
		this.disabled = disabled;
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

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
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
		return "Produkt [produktId=" + produktId + ", kurzbezeichnung=" + kurzbezeichnung + ", inventurnummer="
				+ inventurnummer + ", seriennummer=" + seriennummer + ", marke=" + marke + ", bezeichnung="
				+ bezeichnung + ", langbezeichnung=" + langbezeichnung + ", foto=" + foto + ", verleih=" + verleih
				+ ", kategorie=" + kategorie + "]";
	}

	public ProduktDto toDto() {
		// TODO Auto-generated method stub
		ProduktStatus status = ProduktStatus.FREI;
		DateFormat sdff = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

		int verleihIdMax = 0;
		Verleih toCheckVerleih = new Verleih();

		if (!this.verleih.isEmpty()) {
			for (Verleih verleih : this.verleih) {
				if (verleih.getVerleihId() > verleihIdMax) {
					verleihIdMax = Math.toIntExact(verleih.getVerleihId());
					toCheckVerleih = verleih;
				}
			}
			if (isVerliehen(toCheckVerleih)) {
				status = ProduktStatus.VERLIEHEN;
			}
		}

		if (getLocked()) {
			status = ProduktStatus.GESPERRT;
		}

		return new ProduktDto(produktId, bezeichnung, inventurnummer, kurzbezeichnung, langbezeichnung, marke,
				seriennummer, foto, kategorie.toDto(), "" + verleihIdMax, produkt, status);
	}

	public boolean isVerliehen(Verleih lastVerleih) {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
System.out.println("LASTVERLEI: "+lastVerleih.getZurueckgenommenVon());
		if (lastVerleih.getZurueckgenommenVon() == null) {
			return true;
		}

		// should not be necessary / was old checking system
		try {
			Date currentDate = sdf.parse(sdf.format(new Date()));
			Date startDate = sdf.parse(sdf.format(lastVerleih.getStartDate()));
			Date endDate = sdf.parse(sdf.format(lastVerleih.getEndDate()));
			if (currentDate.compareTo(startDate) == 0 || currentDate.compareTo(endDate) == 0 || //
					(currentDate.compareTo(startDate) > 0 && currentDate.compareTo(endDate) < 0)) {
				return true;
			}

		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return false;
	}

}
