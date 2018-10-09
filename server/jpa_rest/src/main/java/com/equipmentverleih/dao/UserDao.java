package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.User;

@Named
public class UserDao {

	@PersistenceContext 
	EntityManager em;
	
	public List<User> findAll() {
		return em.createQuery("select u from User u", User.class).getResultList();
	}
}
