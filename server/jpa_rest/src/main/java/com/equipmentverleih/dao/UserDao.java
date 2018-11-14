package com.equipmentverleih.dao;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.equipmentverleih.model.User;
import com.equipmentverleih.dto.UserDto;

/**
 * @author nicoz
 *
 */
@Named
public class UserDao {

	@PersistenceContext 
	EntityManager em;
	
	//select u from User u left join u.equipment e
	public List<User> findAll() {
		return em.createQuery("select u from User u", User.class).getResultList();
		
	}
}
