package com.equipmentverleih.response;

import com.equipmentverleih.enums.ErrorNumber;
import com.equipmentverleih.enums.SuccessState;

/**
 * @author nicoz
 *
 */
public class DefaultResponse {
	ErrorNumber error = ErrorNumber.NO_ERROR;
	SuccessState state = SuccessState.FAILURE;

	public ErrorNumber getError() {
		return error;
	}

	public void setError(ErrorNumber error) {
		this.error = error;
	}

	public SuccessState getState() {
		return state;
	}

	public void setState(SuccessState state) {
		this.state = state;
	}

}
