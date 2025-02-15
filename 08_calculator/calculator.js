const add = function(awal, ...args) {
  let total = awal;
  args.forEach((item) => {
    total += item;
  });
	return total;
};

const subtract = function(awal, ...args) {
	let total = awal;
  args.forEach((item) => {
    total -= item;
  });
	return total;
};

const sum = function(array) {
  if (!array.length){
    return 0;
  }
  return array.reduce(function(total, num) {
    return total + num;
  });
};

const multiply = function(array) {
  if (!array.length){
    return 0;
  }
  return array.reduce(function(total, num) {
    return total * num;
  });
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(number) {
  let hasil = number;
  if (number < 1){
    return 1;
  }

	for (i = number-1; i > 0; i--){
    hasil *= i;
  }
  return hasil;
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
