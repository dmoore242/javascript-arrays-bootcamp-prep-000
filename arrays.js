var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const array = [];
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(element) {
  var array = [];
  array.unshift(element);
  return array;
}