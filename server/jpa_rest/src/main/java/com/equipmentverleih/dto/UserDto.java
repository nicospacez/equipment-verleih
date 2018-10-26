package com.equipmentverleih.dto;

import com.equipmentverleih.model.User;

public class UserDto implements Transferable<User>{

	Long userId;
	
	String username;
	String klasse;
	String vorname;
	String nachname;
	String password;
	
	int katalognummer;
	
	boolean isAdmin;
	
	
	
	public UserDto(Long userId, String username, String klasse, String vorname, String nachname, int katalognummer, boolean isAdmin) {
		super();
		this.userId = userId;
		this.username = username;
		this.klasse = klasse;
		this.vorname = vorname;
		this.nachname = nachname;
		this.katalognummer = katalognummer;
		this.isAdmin = isAdmin;
	}

	@Override
	public User toEntity() {
		// TODO Auto-generated method stub
		return new User(this.vorname, this.nachname, this.username, this.klasse, this.katalognummer, this.isAdmin, this.password);
	}

	@Override
	public boolean isValid() {
		// TODO Auto-generated method stub
		return this.userId != null && 
				this.username != null &&
				this.klasse != null &&
				this.vorname != null &&
				this.nachname != null;
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

	public String getKlasse() {
		return klasse;
	}

	public void setKlasse(String klasse) {
		this.klasse = klasse;
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

	public int getKatalognummer() {
		return katalognummer;
	}

	public void setKatalognummer(int katalognummer) {
		this.katalognummer = katalognummer;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
