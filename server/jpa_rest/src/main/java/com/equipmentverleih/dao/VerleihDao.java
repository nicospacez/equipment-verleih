package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Verleih;

/**
 * @author nicoz
 *
 */
@Named
public class VerleihDao {

	@PersistenceContext
	EntityManager em;

	public List<Verleih> findAll() {
		return em.createQuery("select v from Verleih v", Verleih.class).getResultList();

	}

	public Verleih findByProduktId(int id) {
		return em.createQuery("select v from Verleih v where v.produkt.produktId = " + id, Verleih.class)
				.getSingleResult();
	}

	public List<Verleih> findOpenUserVerleih(Long userId) {
		return em.createQuery(
				"select v from Verleih v where v.user.userId = " + userId + " AND v.zurueckgenommenVon IS NULL order by v.verleihId desc",
				Verleih.class).setMaxResults(15).getResultList();
	}

	public List<Verleih> findLatestVerleih(Long produktId) {
		return em.createQuery(
				"select v from Verleih v where v.produkt.produktId = " + produktId + " order by v.verleihId desc",
				Verleih.class).setMaxResults(5).getResultList();
	}
}
