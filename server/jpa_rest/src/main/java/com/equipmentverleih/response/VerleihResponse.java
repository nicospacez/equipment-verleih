/**
 * 
 */
package com.equipmentverleih.response;

import com.equipmentverleih.dto.VerleihDto;

/**
 * @author nicoz
 *
 */
public class VerleihResponse extends DefaultResponse {

	VerleihDto verleihDto;

	public VerleihDto getVerleihDto() {
		return verleihDto;
	}

	public void setVerleihDto(VerleihDto verleihDto) {
		this.verleihDto = verleihDto;
	}

}
