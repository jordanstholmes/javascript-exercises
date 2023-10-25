const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => {
    return acc * num;
  }, 1);
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
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
