function roundTo(num, places) {
  return Math.round((num + Number.EPSILON) * 10**places) / 10**places;
}

const convertToCelsius = function(temp) {
  return roundTo((temp - 32) * (5/9), 1);
};

const convertToFahrenheit = function(temp) {
  return roundTo(temp * (9/5) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
