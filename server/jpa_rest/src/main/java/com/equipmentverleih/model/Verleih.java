package com.equipmentverleih.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

import com.equipmentverleih.dto.VerleihDto;

/**
 *
 * @author nicoz
 */
@Table(name = "eqv_verleih")
@Entity
public class Verleih implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long verleihId;

	@Temporal(TemporalType.DATE)
	private Date startDate, endDate;

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "produktId")
	private Produkt produkt;

	@ManyToOne
	private User hergeborgtVon;

	@ManyToOne
	private User zurueckgenommenVon;

	public Verleih() {
	}

	public Verleih(Date startDate, Date endDate, User user, Produkt produkt, User hergeborgtVon,
			User zurueckgenommenVon) {
		this.startDate = startDate;
		this.endDate = endDate;
		this.user = user;
		this.produkt = produkt;
		this.hergeborgtVon = hergeborgtVon;
		this.zurueckgenommenVon = zurueckgenommenVon;
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

	public Long getVerleihId() {
		return verleihId;
	}

	public void setVerleihId(Long verleihId) {
		this.verleihId = verleihId;
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

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (verleihId != null ? verleihId.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		// TODO: Warning - this method won't work in the case the id fields are not set
		if (!(object instanceof Verleih)) {
			return false;
		}
		Verleih other = (Verleih) object;
		if ((this.verleihId == null && other.verleihId != null)
				|| (this.verleihId != null && !this.verleihId.equals(other.verleihId))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "Verleih [verleihId=" + verleihId + ", startDate=" + startDate + ", endDate=" + endDate + ", user="
				+ user + ", produkt=" + produkt + ", hergeborgtVon=" + hergeborgtVon + ", zurueckgenommenVon="
				+ zurueckgenommenVon + "]";
	}

	public VerleihDto toDto() {
		return new VerleihDto(this.verleihId, this.endDate, this.startDate, this.user.toDto(), this.hergeborgtVon.toDto(),
				this.zurueckgenommenVon.toDto(), this.produkt.toDto());
	}

}
