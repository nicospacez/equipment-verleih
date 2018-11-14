/**
 * 
 */
package com.equipmentverleih.response;

import com.equipmentverleih.dto.KategorieDto;

/**
 * @author nicoz
 *
 */
public class KategorieResponse extends DefaultResponse{
	KategorieDto kategorieDto;

	public KategorieDto getKategorieDto() {
		return kategorieDto;
	}

	public void setKategorieDto(KategorieDto kategorieDto) {
		this.kategorieDto = kategorieDto;
	}
	
	
}
