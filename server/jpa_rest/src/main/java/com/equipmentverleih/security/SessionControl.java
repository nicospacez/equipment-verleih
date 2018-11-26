/**
 * 
 */
package com.equipmentverleih.security;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import javax.inject.Inject;

import org.apache.log4j.Logger;

/**
 * @author nicoz
 *
 */
public class SessionControl extends Thread{
    public final int WAITING_TIME_TILL_ACTIVE_CHECK = 45; //Time in Seconds
	@Inject Logger log;
    private SessionManager sessionManager = new SessionManager();
    public SessionControl() {
    }

    @Override
    public void run() {
        for (;;) {
            int count = sessionManager.getActiveSessions().size();
            sessionManager.setActiveSessions(sessionManager.getActiveSessions().stream().filter(s -> s.getToken().expireDateAsObject.isAfter(LocalDateTime.now())).collect(Collectors.toList()));
            int delta = count - sessionManager.getActiveSessions().size();
            if (delta > 0) {
                log.debug(String.format("SessionControl cleared %d inactive Sessions", delta));
            }

            try {
                this.sleep(WAITING_TIME_TILL_ACTIVE_CHECK * 1000);
            } catch (Exception e) {
                // nothing to do here
            }
        }
    }
    
    
}
