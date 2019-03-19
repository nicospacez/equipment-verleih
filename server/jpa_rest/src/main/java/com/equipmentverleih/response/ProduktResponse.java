/**
 * 
 */
package com.equipmentverleih.response;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import com.equipmentverleih.dto.ProduktDto;

/**
 * @author nicoz
 *
 */
public class ProduktResponse extends DefaultResponse{
	ProduktDto produktDto;
	
	List<ProduktDto> produktDtoList = new ArrayList<>();

	public ProduktDto getProduktDto() {
		return produktDto;
	}

	public void setProduktDto(ProduktDto produktDto) {
		this.produktDto = produktDto;
	}

	public List<ProduktDto> getProduktDtoList() {
		return produktDtoList;
	}

	public void setProduktDtoList(List<ProduktDto> produktDtoList) {
		this.produktDtoList = produktDtoList;
	}
	
	
	
}
