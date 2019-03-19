package com.equipmentverleih.response;

import java.util.ArrayList;
import java.util.List;

import com.equipmentverleih.dto.UserDto;
import com.equipmentverleih.model.User;

/**
 * @author nicoz
 *
 */
public class UserResponse extends DefaultResponse {
	UserDto userDto;

	List<User> userDtoList = new ArrayList<>();

	String token;

	public UserResponse() {
		super();
	}

	public List<User> getUserDtoList() {
		return userDtoList;
	}

	public void setUserDtoList(List<User> userDtoList) {
		this.userDtoList = userDtoList;
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
