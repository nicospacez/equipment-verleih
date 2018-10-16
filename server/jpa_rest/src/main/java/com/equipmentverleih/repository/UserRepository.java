package com.equipmentverleih.repository;

import com.google.gson.Gson;
import com.equipmentverleih.security.Password;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import javax.ejb.Stateless;
import javax.persistence.Query;

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
    
    @Override
    public void create(User user) {
        try {
            user.setPassword(Password.getSaltedHash(user.getPassword()));
            super.create(user);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
    }

    public String updateUser(String username, User user) throws NoSuchAlgorithmException, InvalidKeySpecException{
        Query query = super.getEntityManager().createQuery("SELECT u FROM UserEntity u where u.username = '" + username + "'");
        
        User newUser = new User();
            newUser = (User) query.getResultList().stream().findFirst().orElse(null);
            newUser.setPassword(Password.getSaltedHash(user.getPassword()));
            newUser.setUsername(user.getUsername());
            super.edit(newUser);
        return "";
    }
    
    public String checkPassword(String username, User user) throws NoSuchAlgorithmException, InvalidKeySpecException{
        Query query = super.getEntityManager().createQuery("SELECT u FROM UserEntity u where u.username = '" + username + "'");
        if (query.getResultList().isEmpty()){
            return new Gson().toJson("{'message': 'username not found'}");
        }
        else{
        	User newUser = new User();
            newUser = (User) query.getResultList().stream().findFirst().orElse(null);
            if(Password.check(user.getPassword(), newUser.getPassword())){
            return new Gson().toJson("{'message': 'Login Successfull!'}");
            }
            else{
                return new Gson().toJson("{'message': 'ERROR: Password wrong'}");
            }
        }
        
    }
 
}