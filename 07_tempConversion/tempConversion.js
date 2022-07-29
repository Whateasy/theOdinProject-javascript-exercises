const ftoc = function(tempF) {
  const celsius = (tempF - 32) * 5 / 9
  return Math.round(celsius * 10) / 10
};

const ctof = function(tempC) {
  const fahrenheit = tempC / 5 * 9 + 32
  return Math.round(fahrenheit * 10) / 10
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
