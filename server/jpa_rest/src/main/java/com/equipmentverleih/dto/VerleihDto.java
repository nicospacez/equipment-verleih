package com.equipmentverleih.dto;

import java.util.Date;

import com.equipmentverleih.model.Produkt;
import com.equipmentverleih.model.User;
import com.equipmentverleih.model.Verleih;

/**
 * @author nicoz
 *
 */
public class VerleihDto implements Transferable<Verleih> {

	Long verleihId;

	Date endDate;
	Date startDate;
	
	UserDto user;
	UserDto hergeborgtVon;
	UserDto zurueckgenommenVon;
	
	ProduktDto produkt;

	
	public VerleihDto(Long verleihId, Date endDate, Date startDate, UserDto user, UserDto hergeborgtVon,
			UserDto zurueckgenommenVon, ProduktDto produkt) {
		super();
		this.verleihId = verleihId;
		this.endDate = endDate;
		this.startDate = startDate;
		this.user = user;
		this.hergeborgtVon = hergeborgtVon;
		this.zurueckgenommenVon = zurueckgenommenVon;
		this.produkt = produkt;
	}

	@Override
	public Verleih toEntity() {
		// TODO Auto-generated method stub
		return new Verleih(startDate, endDate, user.toEntity(), produkt.toEntity(), hergeborgtVon.toEntity(), zurueckgenommenVon.toEntity());
	}

	@Override
	public boolean isValid() {
		// TODO Auto-generated method stub
		return false;
	}

	public Long getVerleihId() {
		return verleihId;
	}

	public void setVerleihId(Long verleihId) {
		this.verleihId = verleihId;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	public UserDto getHergeborgtVon() {
		return hergeborgtVon;
	}

	public void setHergeborgtVon(UserDto hergeborgtVon) {
		this.hergeborgtVon = hergeborgtVon;
	}

	public UserDto getZurueckgenommenVon() {
		return zurueckgenommenVon;
	}

	public void setZurueckgenommenVon(UserDto zurueckgenommenVon) {
		this.zurueckgenommenVon = zurueckgenommenVon;
	}

	public ProduktDto getProdukt() {
		return produkt;
	}

	public void setProdukt(ProduktDto produkt) {
		this.produkt = produkt;
	}






}
