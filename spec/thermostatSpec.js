'use strict';

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat(); 
  });

  it('starts at 20 degress', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  })

  it('decreases temperature', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })

  it('has a minium temperature of 10 degrees', () => {
    for (let i = 0; i < 15; i++ ) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
  })
 

  describe('Power Saving Mode', () => {
    it('has power saving mode on by default', () => {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    })

    it('can switch power saving mode off and on', () => {
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false)
      thermostat.powerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    })

    it('has a maximum temperature of 25 degrees in power save mode', () => {
      for (let i =0; i < 6; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    })

    it('has a maximum temperature of 32 degrees when not in power save mode', () => {
      thermostat.powerSavingModeOff();
      for (let i =0; i < 13; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    })
  });
});

