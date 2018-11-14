package com.equipmentverleih.logging;

import javax.enterprise.inject.spi.InjectionPoint;

import org.apache.log4j.Logger;

import javax.enterprise.inject.Produces;

/**
 * @author nicoz
 *
 */
public class LogFactory {
	@Produces
	Logger createLogger(InjectionPoint injectionPoint) {
		String name = injectionPoint.getMember().getDeclaringClass().getName();
		return Logger.getLogger(name);
	}
}