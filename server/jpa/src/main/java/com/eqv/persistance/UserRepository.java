package com.eqv.persistance;

import com.eqv.entities.User;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author nicoz
 */
public class UserRepository {

    private EntityManager em;

    public UserRepository() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("eqvPU");
        em = emf.createEntityManager();
    }

    public List<User> findAllUsers() {
        return em.createQuery("SELECT u FROM User u").getResultList();
    }

    public void createUser(User user) {
        em.getTransaction().begin();
        em.persist(user);
        em.getTransaction().commit();
    }
}
