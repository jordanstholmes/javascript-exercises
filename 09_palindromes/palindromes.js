const palindromes = function (str) {
  const justLetters = removeNonAlphaNumeric(str).toLowerCase();
  let i = 0;
  let j = justLetters.length - 1;
  while (j > i) {
    if (justLetters[i] !== justLetters[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

function removeNonAlphaNumeric(str) {
  let newStr = '';
  for (const char of str) {
    if (isAlphaNumeric(char)) {
      newStr += char;
    }
  }
  return newStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  const isUpperCase = code >= 65 && code <= 90;
  const isLowerCase = code >= 97 && code <= 122;
  const isNumber = code >= 48 && code <= 57;
  return isUpperCase || isLowerCase || isNumber;
}

// Do not edit below this line
module.exports = palindromes;
