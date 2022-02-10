'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 32;
    this.MAXIMUM_POWER_SAVE_TEMPERATURE = 25;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.temperature = this.DEFAULT_TEMPERATURE;
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

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }

  powerSavingModeOn() {
    this.powerSavingMode = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    } else if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    } else {
    return 'high-usage';
  }}
};