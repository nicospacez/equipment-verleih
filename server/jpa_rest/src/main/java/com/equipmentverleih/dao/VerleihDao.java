package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Verleih;

@Named
public class VerleihDao {

	@PersistenceContext 
	EntityManager em;

	public List<Verleih> findAll() {
		return em.createQuery("select v from Verleih v", Verleih.class).getResultList();
		
	}
}
