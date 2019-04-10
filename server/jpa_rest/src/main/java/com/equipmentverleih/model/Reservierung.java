package com.equipmentverleih.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.equipmentverleih.dto.ReservierungDto;
import com.fasterxml.jackson.annotation.JsonFormat;

/**
 *
 * @author nicoz
 */
@Table(name="eqv_reservierung")
@Entity
public class Reservierung implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservierungId;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date startDate, endDate;

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;

	@ManyToOne
	@JoinColumn(name = "produktId")
	private Produkt produkt;

		
	public Reservierung() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Reservierung(Date startDate, Date endDate, User user, Produkt produkt) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.user = user;
		this.produkt = produkt;
	}

	public Long getReservierungId() {
		return reservierungId;
	}

	public void setReservierungId(Long reservierungId) {
		this.reservierungId = reservierungId;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Produkt getProdukt() {
		return produkt;
	}

	public void setProdukt(Produkt produkt) {
		this.produkt = produkt;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Reservierung [reservierungId=" + reservierungId + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", user=" + user + ", produkt=" + produkt + "]";
	}


	public ReservierungDto toDto() {
		return new ReservierungDto(reservierungId, endDate, startDate, user.toDto(), produkt.toDto());
	}

	
}
