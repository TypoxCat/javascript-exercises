const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((sum, val) => sum+val, 0)
};

const multiply = function(array) {
  return array.reduce((mul, val) => mul * val, 1)
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(number) {
  let total = 1;
  while (number > 0){
    total = total * number;
    number--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
