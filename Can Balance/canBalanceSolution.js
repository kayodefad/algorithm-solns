//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
    //Type your solutions here
	var sum = 0;
	var x = [];
	for (var i = 0; i < array.length; i++){
		sum += array[i];
		x.push(sum);
	}
	var mid = sum/2;
	if(sum % 2 === 0){
		var ls = x.indexOf(mid) + 1 ;
		var rs = array.length - ls;
		var ans = [ls,  rs];
		if( rs === 0){
			return -1;
		}else {
			return ans; 
		}
	}else{ 
		return -1; 
	}
}

module.exports = canBalance;