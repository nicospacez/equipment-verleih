/**
 * 
 */
package com.equipmentverleih.rest;

import com.equipmentverleih.dto.UserDto;

/**
 * @author nicoz
 *
 */
public class LoginResponseDTO {
    public String token;
    public String errorMessage = null;
    public UserDto user;
}
