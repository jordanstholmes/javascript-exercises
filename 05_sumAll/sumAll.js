const sumAll = function(num1, num2) {
  const hasNegativeArg = num1 < 0 || num2 < 0;
  const hasNonNumberArg = typeof num1 !== 'number' || typeof num2 !== 'number';
  if (hasNegativeArg || hasNonNumberArg) return 'ERROR';

  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
