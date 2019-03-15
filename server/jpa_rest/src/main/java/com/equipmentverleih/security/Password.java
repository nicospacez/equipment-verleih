package com.equipmentverleih.security;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import org.apache.commons.codec.binary.Base64;

/**
 * @author nicoz
 *
 */
public class Password {
	private static final int iterations = 2000;
	private static final int saltlen = 32;
	private static final int keyLen = 128;

	public static String getSaltedHash(String password) throws NoSuchAlgorithmException, InvalidKeySpecException {
		byte[] salt = SecureRandom.getInstance("SHA1PRNG").generateSeed(saltlen);
		return Base64.encodeBase64String(salt) + "$" + hash(password, salt);
	}

	public static boolean check(String password, String hash) throws NoSuchAlgorithmException, InvalidKeySpecException {
		String[] saltedHash = hash.split("\\$");
		if (saltedHash.length != 2)
			throw new IllegalStateException();
		String hashedPw = hash(password, Base64.decodeBase64(saltedHash[0]));
		return hashedPw.equals(saltedHash[1]);
	}

	private static String hash(String password, byte[] salt) throws NoSuchAlgorithmException, InvalidKeySpecException {
		if (password == null || password.length() == 0)
			throw new IllegalArgumentException("Kennwort illegal!");
		SecretKeyFactory f = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
		SecretKey key = f.generateSecret(new PBEKeySpec(password.toCharArray(), salt, iterations, keyLen));
		return Base64.encodeBase64String(key.getEncoded());
	}
}
