package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Produkt;

@Named
public class ProduktDao {

	@PersistenceContext 
	EntityManager em;

	public List<Produkt> findAll() {
		return em.createQuery("select p from Produkt p", Produkt.class).getResultList();
		
	}
}
