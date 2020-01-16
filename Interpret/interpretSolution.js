//This function takes three parameters, the first is a number and the second and third are arrays.
//The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
//The third array is an arry of numbers which are the second participants in the operations
//If you encounter an unknown command in the second array, return -1.

function interpret(num,arr1,arr2) {
    for (let i = 0; i<arr1.length; i++) {
        if (arr1[i] == '+') {
            num += arr2[i];
        } else if (arr1[i] == '-') {
            num -= arr2[i];
        } else if (arr1[i] == '*') {
            num *= arr2[i];
        } else return -1
    }
    return num;
}

module.exports = interpret;