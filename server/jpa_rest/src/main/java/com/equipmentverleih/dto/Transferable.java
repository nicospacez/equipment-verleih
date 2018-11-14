package com.equipmentverleih.dto;

/**
 * @author nicoz
 *
 */
public interface Transferable<T> {

	T toEntity();

	boolean isValid();
}
