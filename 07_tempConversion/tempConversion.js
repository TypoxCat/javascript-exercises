const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * (5/9);
  if (!Number.isInteger(temperature)){
    temperature = Math.round(temperature * 10)/10
  }
  return temperature;
};

const convertToFahrenheit = function(temperature) {
  temperature = (temperature * (9/5)) + 32;
  if (!Number.isInteger(temperature)){
    temperature = Math.round(temperature * 10)/10
  }
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
