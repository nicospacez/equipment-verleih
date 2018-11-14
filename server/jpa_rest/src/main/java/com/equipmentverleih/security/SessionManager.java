/**
 * 
 */
package com.equipmentverleih.security;

import java.util.ArrayList;
import java.util.List;

import com.equipmentverleih.model.User;

/**
 * @author nicoz
 *
 */
public class SessionManager {
	  private List<Session> activeSessions = new ArrayList<>();
	    private final Object listLock = new Object();
	    private final SessionControl control = new SessionControl();

	    public SessionManager() {
	        //Create Worker Thread that checks for inactive Tokens every x minutes
	        control.start();
	    }

	    public Session createSession(long userId) throws Exception{
	        activeSessions.removeIf(s -> s.getUserId() == userId);

	        Session s = new Session(userId);
	        synchronized (listLock) {
	            this.activeSessions.add(s);
	        }
	        return s;
	    }
	    
	    public boolean isValidSession(String token){
	        return activeSessions.stream().anyMatch(s -> s.getToken().getTokenString().equals(token));
	    }

	
	    public User findUserByToken(String token) {
	        Long userId;
	        synchronized (listLock) {
	            userId = activeSessions.stream().filter(s -> s.getToken().getTokenString().equals(token)).findFirst().map(s -> s.getUserId()).orElse(null);
	        }
	        return null;
	    }
	    
	    public List<Session> getActiveSessions() {
	        return this.activeSessions;
	    }

	    public void setActiveSessions(List<Session> activeSessions) {
	        synchronized (listLock) {
	            this.activeSessions = activeSessions;
	        }
	    }
	    
	    public String refreshToken(String token) throws Exception{
	        Session s = this.activeSessions.stream().filter(session -> session.getToken().getTokenString().equals(token)).findFirst().orElse(null);
	        if(s == null){
	            throw new Exception();
	        }
	        
	        return s.refreshToken();
	    }
}
