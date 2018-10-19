package com.equipmentverleih.repository;

import javax.ejb.Stateless;

import com.equipmentverleih.model.Produkt;

@Stateless
public class ProduktRepository extends AbstractRepository<Produkt>{

	public ProduktRepository() {
		super(Produkt.class);
		// TODO Auto-generated constructor stub
	}

}
