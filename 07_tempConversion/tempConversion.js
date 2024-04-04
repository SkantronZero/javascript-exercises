const convertToCelsius = function(inNum) {
  return Math.round(((inNum-32) * (5/9))*10)/10;
};

const convertToFahrenheit = function(inNum) {
  return Math.round(((inNum*(9/5))+32)*10)/10;
};

convertToCelsius(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

