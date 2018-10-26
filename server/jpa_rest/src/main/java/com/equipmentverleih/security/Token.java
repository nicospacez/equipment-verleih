package com.equipmentverleih.security;

import java.time.LocalDateTime;

public class Token {
	long id;

    LocalDateTime creationDateAsObject;
    LocalDateTime expireDateAsObject;
	
	private final static int TOKEN_TIMEOUT = 30; //In Minutes
	
    public Token(long id) {
        this.id = id;
        this.creationDateAsObject = LocalDateTime.now();
        this.expireDateAsObject = LocalDateTime.now().plusMinutes(Token.TOKEN_TIMEOUT);
    }
	
    public void createToken() {
    	
    }
}
