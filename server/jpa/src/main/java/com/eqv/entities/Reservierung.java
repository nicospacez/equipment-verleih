package com.eqv.entities;

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

/**
 *
 * @author nicoz
 */
@Table(name="eqv_reservierung")
@Entity
public class Reservierung implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reservierungId;

    @Temporal(TemporalType.DATE)
    private Date startDate, endDate;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "produktId")
    private Produkt produkt;

    public Reservierung() {
    }

    public Reservierung(Date startDate, Date endDate, User user, Produkt produkt) {
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


    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (reservierungId != null ? reservierungId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Reservierung)) {
            return false;
        }
        Reservierung other = (Reservierung) object;
        if ((this.reservierungId == null && other.reservierungId != null) || (this.reservierungId != null && !this.reservierungId.equals(other.reservierungId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.eqv.entities.Reservierung[ id=" + reservierungId + " ]";
    }

}
