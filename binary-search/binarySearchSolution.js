//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise
function binarySearch(array, number) {
  return array.includes(number) ? {'index': array.indexOf(number), 'count': array.indexOf(number)+1} : {'index': -1, 'count': 0}
}


module.exports = binarySearch;