/**
 * 
 */
package com.equipmentverleih.dto;

import java.util.Date;

import com.equipmentverleih.model.Reservierung;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author nicoz
 *
 */
public class ReservierungDto implements Transferable<Reservierung> {

	Long reservierungId;

	@JsonFormat(pattern = "dd-MM-yyyy")
	Date endDate;
	
	@JsonFormat(pattern = "dd-MM-yyyy")
	Date startDate;

	UserDto user;

	ProduktDto produkt;
	
	
	public ReservierungDto(Long reservierungId, Date endDate, Date startDate, UserDto user, ProduktDto produkt) {
		super();
		this.reservierungId = reservierungId;
		this.endDate = endDate;
		this.startDate = startDate;
		this.user = user;
		this.produkt = produkt;
	}

	@Override
	public Reservierung toEntity() {
		// TODO Auto-generated method stub
		return new Reservierung(startDate, endDate, user.toEntity(), produkt.toEntity());
	}

	@Override
	public boolean isValid() {
		// TODO Auto-generated method stub
		return false;
	}

	public Long getReservierungId() {
		return reservierungId;
	}

	public void setReservierungId(Long reservierungId) {
		this.reservierungId = reservierungId;
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

	public ProduktDto getProdukt() {
		return produkt;
	}

	public void setProdukt(ProduktDto produkt) {
		this.produkt = produkt;
	}
	
	
	
}
