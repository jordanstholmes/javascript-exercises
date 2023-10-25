const fibonacci = function(member) {
  if (member < 0) return 'OOPS';
  if (member === 0) return 0;
  if (member <= 2) return 1;

  const prev = [1, 1]
  let curr;
  for (let i = 3; i <= member; i++) {
    curr = prev[0] + prev[1];
    prev[0] = prev[1];
    prev[1] = curr;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
