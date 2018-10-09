package com.equipmentverleih.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

/**
 *
 * @author nicoz
 */
@Table(name = "eqv_user")
@Entity
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    private String vorname, nachname, klasse;
    
    //@Column(unique=true, nullable=false)
    private String username;

    private int Katalognummer;

    private boolean isAdmin;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Verleih> equipment;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Verleih> hergeborgt;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Verleih> zurueckgenommen;

    public User() {
    }

    public User(String vorname, String nachname, String username, String klasse, int Katalognummer, boolean isAdmin) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.username = username;
        this.klasse = klasse;
        this.Katalognummer = Katalognummer;
        this.isAdmin = isAdmin;
    }

    public List<Verleih> getHergeborgt() {
        return hergeborgt;
    }

    public void setHergeborgt(List<Verleih> hergeborgt) {
        this.hergeborgt = hergeborgt;
    }

    public List<Verleih> getZurueckgenommen() {
        return zurueckgenommen;
    }

    public void setZurueckgenommen(List<Verleih> zurueckgenommen) {
        this.zurueckgenommen = zurueckgenommen;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Verleih> getEquipment() {
        return equipment;
    }

    public void setEquipment(List<Verleih> equipment) {
        this.equipment = equipment;
    }

    public String getVorname() {
        return vorname;
    }

    public void setVorname(String vorname) {
        this.vorname = vorname;
    }

    public String getNachname() {
        return nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getKlasse() {
        return klasse;
    }

    public void setKlasse(String klasse) {
        this.klasse = klasse;
    }

    public int getKatalognummer() {
        return Katalognummer;
    }

    public void setKatalognummer(int Katalognummer) {
        this.Katalognummer = Katalognummer;
    }

    public boolean isIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String getFirstname() {
        return vorname;
    }

    public void setFirstname(String firstname) {
        this.vorname = firstname;
    }

    public String getLastname() {
        return nachname;
    }

    public void setLastname(String lastname) {
        this.nachname = lastname;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (userId != null ? userId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof User)) {
            return false;
        }
        User other = (User) object;
        if ((this.userId == null && other.userId != null) || (this.userId != null && !this.userId.equals(other.userId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.User[ id=" + userId + " ]";
    }

}
