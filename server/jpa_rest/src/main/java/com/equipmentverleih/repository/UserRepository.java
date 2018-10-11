package com.equipmentverleih.repository;

import javax.ejb.Stateless;

import com.equipmentverleih.model.User;

/**
 *
 * @author nicoz
 */

@Stateless
public class UserRepository extends AbstractRepository<User>{
    public UserRepository() {
        super(User.class);
    }
 
}