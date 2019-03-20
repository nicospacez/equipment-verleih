/**
 * 
 */
package com.equipmentverleih.response;

import java.util.ArrayList;
import java.util.List;

import com.equipmentverleih.dto.VerleihDto;
import com.equipmentverleih.model.Verleih;

/**
 * @author nicoz
 *
 */
public class VerleihResponse extends DefaultResponse {

	VerleihDto verleihDto;

	List<VerleihDto> verleihDtoList = new ArrayList<>();

	public VerleihDto getVerleihDto() {
		return verleihDto;
	}

	public void setVerleihDto(VerleihDto verleihDto) {
		this.verleihDto = verleihDto;
	}

	public List<VerleihDto> getVerleihDtoList() {
		return verleihDtoList;
	}

	public void setVerleihDtoList(List<VerleihDto> verleihDtoList) {
		this.verleihDtoList = verleihDtoList;
	}

}
