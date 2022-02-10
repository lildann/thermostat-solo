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
    if (this.isPowerSavingModeOn() && this.getCurrentTemperature() < this.MAXIMUM_POWER_SAVE_TEMPERATURE) {
    this.temperature += 1;
  } else if (this.isPowerSavingModeOn() === false && this.getCurrentTemperature() < this.MAXIMUM_TEMPERATURE) {
    this.temperature += 1;
  }
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
  isPowerSavingModeOn() {
    return this.powerSavingMode;
  }
  powerSavingModeOff() {
    this.powerSavingMode = false;
  }
 
};