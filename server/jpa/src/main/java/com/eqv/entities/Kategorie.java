package com.eqv.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 *
 * @author nicoz
 */

@Table(name="eqv_kategorie", uniqueConstraints={@UniqueConstraint(columnNames = "kurzbezeichnung")})
@Entity
public class Kategorie implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long kategorieId;

    private String kurzbezeichnung;

    @ManyToOne
    private Kategorie kategorie;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy ="kategorie")
    private List<Kategorie> kategorien;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "kategorie")
    private List<Produkt> produkte;

    public Kategorie() {
    }

    public Kategorie(String kurzbezeichnung, Kategorie kategorie, List<Kategorie> kategorien) {
        this.kurzbezeichnung = kurzbezeichnung;
        this.kategorie = kategorie;
        this.kategorien = kategorien;
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

    public List<Kategorie> getKategorien() {
        return kategorien;
    }

    public void setKategorien(List<Kategorie> kategorien) {
        this.kategorien = kategorien;
    }

    public List<Produkt> getProdukte() {
        return produkte;
    }

    public void setProdukte(List<Produkt> produkte) {
        this.produkte = produkte;
    }

    


    @Override
    public int hashCode() {
        int hash = 0;
        hash += (kategorieId != null ? kategorieId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Kategorie)) {
            return false;
        }
        Kategorie other = (Kategorie) object;
        if ((this.kategorieId == null && other.kategorieId != null) || (this.kategorieId != null && !this.kategorieId.equals(other.kategorieId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.eqv.entities.Kategorie[ id=" + kategorieId + " ]";
    }

}
