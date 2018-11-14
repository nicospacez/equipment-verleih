package com.equipmentverleih.security;

import java.util.Random;

/**
 * @author nicoz
 *
 */
public class Session {
	private Token token;
	private byte[] encryptionKey;
	private long userId;

	public Session(long userId) throws Exception {
		this.userId = userId;

		byte[] arr = new byte[16];
		new Random().nextBytes(arr);
		this.encryptionKey = arr;

		this.token = new Token(userId);
		try {
			this.token.createToken(encryptionKey);
		} catch (Exception e) {
			throw e;
		}
	}

	public String refreshToken() throws Exception {
		this.token = new Token(userId);
		try {
			this.token.createToken(encryptionKey);
		} catch (Exception e) {
			throw e;
		}
		return this.token.getTokenString();
	}

	public Token getToken() {
		return token;
	}

	public void setToken(Token token) {
		this.token = token;
	}

	public byte[] getEncryptionKey() {
		return encryptionKey;
	}

	public void setEncryptionKey(byte[] encryptionKey) {
		this.encryptionKey = encryptionKey;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

}
