package com.eqv.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

/**
 *
 * @author nicoz
 */
@Table(name = "eqv_verleih")
@Entity
public class Verleih implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    @JoinColumn(name = "userId", insertable=false, updatable=false)
    private User hergeborgtVon;

    @ManyToOne
    @JoinColumn(name = "userId", insertable=false, updatable=false)
    private User zurueckgenommenVon;

    public Verleih() {
    }

    public Verleih(Date startDate, User user, Produkt produkt) {
        this.startDate = startDate;
        this.user = user;
        this.produkt = produkt;
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
        if ((this.verleihId == null && other.verleihId != null) || (this.verleihId != null && !this.verleihId.equals(other.verleihId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.eqv.entities.Verleih[ id=" + verleihId + " ]";
    }

}
