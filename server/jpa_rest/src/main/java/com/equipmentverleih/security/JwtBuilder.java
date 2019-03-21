/**
 * 
 */
package com.equipmentverleih.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.concurrent.TimeUnit;

/**
 * @author nicoz
 *
 */
public class JwtBuilder {

	private String key = "secretAF";

	public String create(String subject) {
		return Jwts.builder().setExpiration(new Date(System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(262800)))
				.signWith(SignatureAlgorithm.HS256, key).setSubject(subject).compact();
	}

	public String checkSubject(String token) {
		return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getSubject();
	}

}
