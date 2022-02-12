document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }
  
  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
      thermostat.up();
      updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
      thermostat.down();
      updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
      thermostat.reset();
      updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
      thermostat.powerSavingModeOn();
      document.querySelector('#power-saving-status').innerText = "on";
  });

  document.querySelector('#powersaving-off').addEventListener('click', () => {
      thermostat.powerSavingModeOff();
      document.querySelector('#power-saving-status').innerText = "off";
  });
 });