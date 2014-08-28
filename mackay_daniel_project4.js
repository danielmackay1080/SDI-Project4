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
// Problem 1
// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

var decimalPlace = function (number, numOfDecim){
	var numbers = number.toFixed(numOfDecim);
	return numbers
};
numReturn = decimalPlace(458.92, 3);

//Problem 3
// Find the number of hours or days difference between two dates.

var timeBetweenDates = function (date1, date2, hourString){
	var date1 = new Date (2014, 08, 28);
	var date2 = new Date (2014, 08, 29);
	var dateDiff = date1.getHours() - date2.getHours();
		return (dateDiff / 24 * 60 * 60 * 1000);
};
dateReturn = timeBetweenDates();


// Number Problem 4
// Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var numConvert = function (){
	var number = '42';
	var numCon = Math.floor('42');
		return numCon;
};
returnNum = numConvert();

// Array Functions
// Problem 2
// Find the total value of just the numbers in an array, even if some of the items are not numbers.

var arrayFunction = function (array){
	var number = 0
		for (i = 0, i < myArray.length; i++){
			parseInt (myArray[i]);
			number =+ myArray[i];
			};
		return number;
};

// Main Code

// String Functions

console.log('The answer for string problem 1 is ' + stringReturn + '.');
console.log(stringUpper('daniel mackay is a nice guy.'));

//Number Functions

var date1 = new Date (2014, 08, 28);
var date2 = new Date (2014, 08, 29);
console.log ('There are ' + dateReturn + 'left.');

console.log(returnNum + 'is now a number, not a string');

console.log('The new number is ' + numReturn + );

// Array Functions

var myArray = [ 15, 20, 'dog', 10 , 'cat', 'games'];

