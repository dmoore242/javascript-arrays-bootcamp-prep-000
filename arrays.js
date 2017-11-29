var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [];
  [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(element) {
  var array = [];
  array.unshift(element);
  return array;
}