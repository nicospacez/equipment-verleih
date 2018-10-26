package com.equipmentverleih.dto;

public interface Transferable<T> {

	T toEntity();

	boolean isValid();
}
