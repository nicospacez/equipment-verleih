package com.equipmentverleih.dto;

import java.util.Date;

import com.equipmentverleih.model.Produkt;
import com.equipmentverleih.model.User;
import com.equipmentverleih.model.Verleih;

public class VerleihDto implements Transferable<Verleih> {

	Long verleihId;

	Date endDate;
	Date startDate;
	
	User user;
	User hergeborgtVon;
	User zurueckgenommenVon;
	
	Produkt produkt;

	
	public VerleihDto(Long verleihId, Date endDate, Date startDate, User user, User hergeborgtVon,
			User zurueckgenommenVon, Produkt produkt) {
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
		return new Verleih(startDate, endDate, user, produkt, hergeborgtVon, zurueckgenommenVon);
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public User getHergeborgtVon() {
		return hergeborgtVon;
	}

	public void setHergeborgtVon(User hergeborgtVon) {
		this.hergeborgtVon = hergeborgtVon;
	}

	public User getZurueckgenommenVon() {
		return zurueckgenommenVon;
	}

	public void setZurueckgenommenVon(User zurueckgenommenVon) {
		this.zurueckgenommenVon = zurueckgenommenVon;
	}

	public Produkt getProdukt() {
		return produkt;
	}

	public void setProdukt(Produkt produkt) {
		this.produkt = produkt;
	}


}
