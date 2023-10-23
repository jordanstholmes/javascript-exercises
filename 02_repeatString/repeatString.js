const repeatString = function(str, num) {
  if (num < 0) {
    return 'ERROR';
  }
  return Array(num).fill(str).join('');
};

// Do not edit below this line
module.exports = repeatString;
