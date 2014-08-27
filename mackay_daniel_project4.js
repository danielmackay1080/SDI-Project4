//alert("JavaScript works!");
// Daniel Mackay
// SDI 1408
// Project 4

// Sting Problems
// 1. Does a string follow a 123-456-7890 pattern like a phone number?


var stringFunction = function (string) {
	var mySubstring = string.length
		if (mySubstring === 12){
		return true
			}else{
			return false
			}
};
stringReturn = stringFunction('123-456-7890');


// 4. Title-case a string (split into words, then uppercase the first letter of each word)

var stringUpper = function (string){
	var stringArr = string.split('');
	var answer = '';
		for ( i = 0, d = stringArr.length; i < d; i++){
		 var newString = stringArr[i].replace(stringArr[i].charAt(0),(stringArr[i].charAt(0)).toUpperCase());
		 answer = answer.concat(newString + '');
		 };
		 return answer;
};

// Number Problems
//Problem 1 
// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

var decimalPlace = function (number, decimal) {
	return number(number.tofixed(decimal));
};



// Main Code
// String Functions

console.log('The answer for string problem 1 is ' + stringReturn + '.');
console.log(stringUpper('daniel mackay is a nice guy.'));

//Number Functions

console.log(decimalPlace(1.2345,2));
