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

  const selectElement = document.querySelector('#current-city');
  selectElement.addEventListener('change', (event) => {
    const city = event.target.value;
    if (city === null ) {
      city = "London";
    }
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2246c735910415de8ffac9c858c2e4de&units=metric`
  
    fetch(url)
      .then((response) => {
      return response.json();
    })
    .then((data) => { 
    document.querySelector('#current-temperature').innerText = data.main.temp;
    });
  })

 });

