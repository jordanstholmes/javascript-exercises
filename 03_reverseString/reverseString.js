const reverseString = function(str) {
  let newStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
