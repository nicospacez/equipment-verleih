package com.equipmentverleih.repository;

import javax.ejb.Stateless;

import com.equipmentverleih.model.Verleih;

@Stateless
public class VerleihRepository extends AbstractRepository<Verleih>{

	public VerleihRepository() {
		super(Verleih.class);
	}

}
