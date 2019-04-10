/**
 * 
 */
package com.equipmentverleih.repository;

import com.equipmentverleih.model.Reservierung;
import com.equipmentverleih.model.Verleih;

/**
 * @author nicoz
 *
 */
public class ReservierungRepository extends AbstractRepository<Reservierung> {

	public ReservierungRepository() {
		super(Reservierung.class);
	}

}
