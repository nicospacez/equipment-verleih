package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Produkt;

/**
 * @author nicoz
 *
 */
@Named
public class ProduktDao {

	@PersistenceContext
	EntityManager em;

	public List<Produkt> findAll() {
		return em.createQuery("select p from Produkt p", Produkt.class).getResultList();

	}

	public List<Produkt> findRange(int id) {
		return em.createQuery("select p from Produkt p", Produkt.class) //
				.setFirstResult(id * 10 - 9) //
				.setMaxResults(10) //
				.getResultList();
	}
}
