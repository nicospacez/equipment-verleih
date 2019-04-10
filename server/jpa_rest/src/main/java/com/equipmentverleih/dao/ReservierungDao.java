/**
 * 
 */
package com.equipmentverleih.dao;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.Reservierung;
import com.equipmentverleih.model.Verleih;

/**
 * @author nicoz
 *
 */
@Named
public class ReservierungDao {

	@PersistenceContext
	EntityManager em;

	public List<Reservierung> findAll() {
		return em.createQuery("select r from Reservierung r", Reservierung.class).getResultList();

	}

	public List<Reservierung> findOpenUserReservierung(Long userId) {
		Date date = new Date();

		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

		String formatedDate = dateFormat.format(date);

		System.out.println(formatedDate);
		return em
				.createQuery("select r from Reservierung r where r.user.userId = " + userId + " AND r.startDate >= '"
						+ formatedDate + "' order by r.reservierungId desc", Reservierung.class)
				.setMaxResults(15).getResultList();
	}

	public List<Reservierung> findLatestReservierung(Long produktId) {
		return em.createQuery("select r from Reservierung r where r.produkt.produktId = " + produktId
				+ " order by r.reservierungId desc", Reservierung.class).setMaxResults(5).getResultList();
	}
}
