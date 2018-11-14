package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Kategorie;

/**
 * @author nicoz
 *
 */
@Named
public class KategorieDao {

	@PersistenceContext 
	EntityManager em;

	public List<Kategorie> findAll() {
		return em.createQuery("select k from Kategorie k", Kategorie.class).getResultList();
		
	}
	
	public List<Kategorie> findById(Long id){
		return em.createQuery("select k from Kategorie k where k.kategorieId = "+id, Kategorie.class).getResultList();
	}
}
