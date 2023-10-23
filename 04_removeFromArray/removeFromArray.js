const removeFromArray = function(arr, ...itemsToRemove) {
  const items = new Set(itemsToRemove);
  return arr.filter((element) => {
    return !items.has(element);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
