package com.equipmentverleih.response;

import com.equipmentverleih.dto.UserDto;

/**
 * @author nicoz
 *
 */
public class UserResponse extends DefaultResponse {
	UserDto userDto;

	String token;

	public UserResponse() {
		super();
	}

	public UserDto getUserDto() {
		return userDto;
	}

	public void setUserDto(UserDto userDto) {
		this.userDto = userDto;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
