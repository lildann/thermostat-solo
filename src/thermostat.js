'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 32;
    this.MAXIMUM_POWER_SAVE_TEMPERATURE = 25;
    this.powerSavingMode = true;
  }

  getCurrentTemperature() { 
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }

  down() {
    if (this.isMimumumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }

  isMimumumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
   return (this.isPowerSavingModeOn() === true && this.getCurrentTemperature() === this.MAXIMUM_POWER_SAVE_TEMPERATURE) || 
   (this.isPowerSavingModeOn() === false && this.getCurrentTemperature() === this.MAXIMUM_TEMPERATURE)
  }
  // isMaximumTemperature() {
  //  if (this.isPowerSavingModeOn() === true) { 
  //    return this.getCurrentTemperature() === this.MAXIMUM_POWER_SAVE_TEMPERATURE;
  //  }
  // }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }

  powerSavingModeOn() {
    this.powerSavingMode = true;
  }
};