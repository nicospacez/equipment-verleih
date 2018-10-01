/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.eqv.entities;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Random;
import org.apache.commons.lang3.RandomUtils;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author nicoz
 */
public class ProduktTest {

    public ProduktTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test add a Produkt
     */
    @Test
    public void createProdukt() {
        byte[] randomBytes = RandomUtils.nextBytes(20);
        Produkt produkt = new Produkt("VK06", "2asdh-123as-asdas", "asdasd-2113-aaaa", "Canon", "Canon Fotokamera", "Videokamera06", randomBytes);
    }

}
