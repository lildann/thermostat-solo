'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat(); 
  });

  it('starts at 20 degress', () => {
    expect(thermostat.temperature).toEqual(20);
  });
});