package com.equipmentverleih.security;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;

import com.google.gson.Gson;

/**
 * @author nicoz
 *
 */
public class Token {
	long id;

    LocalDateTime creationDateAsObject;
    LocalDateTime expireDateAsObject;
	
	private final static int TOKEN_TIMEOUT = 30; //In Minutes
	
	String tokenString;
	
    public Token(long id) {
        this.id = id;
        this.creationDateAsObject = LocalDateTime.now();
        this.expireDateAsObject = LocalDateTime.now().plusMinutes(Token.TOKEN_TIMEOUT);
    }
	
    public void createToken(byte[] encryptionKey) throws Exception {
        byte[] encryptable = new Gson().toJson(this).getBytes();
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(encryptionKey, "AES"));
        byte[] encrypted = cipher.doFinal(encryptable);
        this.tokenString = Base64.getEncoder().encodeToString(encrypted)/*.replace("/", "%2F").replace("+", "%2B")*/;
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDateTime getCreationDateAsObject() {
		return creationDateAsObject;
	}

	public void setCreationDateAsObject(LocalDateTime creationDateAsObject) {
		this.creationDateAsObject = creationDateAsObject;
	}

	public LocalDateTime getExpireDateAsObject() {
		return expireDateAsObject;
	}

	public void setExpireDateAsObject(LocalDateTime expireDateAsObject) {
		this.expireDateAsObject = expireDateAsObject;
	}

	public String getTokenString() {
		return tokenString;
	}

	public void setTokenString(String tokenString) {
		this.tokenString = tokenString;
	}

	public static int getTokenTimeout() {
		return TOKEN_TIMEOUT;
	}
    
    
}
