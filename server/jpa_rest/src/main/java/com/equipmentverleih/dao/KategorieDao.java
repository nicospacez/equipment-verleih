package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Kategorie;

@Named
public class KategorieDao {

	@PersistenceContext 
	EntityManager em;

	public List<Kategorie> findAll() {
		return em.createQuery("select k from Kategorie k", Kategorie.class).getResultList();
		
	}
}
