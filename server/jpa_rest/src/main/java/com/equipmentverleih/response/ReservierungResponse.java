/**
 * 
 */
package com.equipmentverleih.response;

import java.util.ArrayList;
import java.util.List;

import com.equipmentverleih.dto.ReservierungDto;
import com.equipmentverleih.dto.VerleihDto;

/**
 * @author nicoz
 *
 */
public class ReservierungResponse extends DefaultResponse {

	ReservierungDto reservierungDto;

	List<ReservierungDto> reservierungDtoList = new ArrayList<>();

	public ReservierungDto getReservierungDto() {
		return reservierungDto;
	}

	public void setReservierungDto(ReservierungDto reservierungDto) {
		this.reservierungDto = reservierungDto;
	}

	public List<ReservierungDto> getReservierungDtoList() {
		return reservierungDtoList;
	}

	public void setReservierungDtoList(List<ReservierungDto> reservierungDtoList) {
		this.reservierungDtoList = reservierungDtoList;
	}

}
