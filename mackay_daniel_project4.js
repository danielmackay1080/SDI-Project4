//alert("JavaScript works!");
// Daniel Mackay
// SDI 1408
// Project 4

// Sting Problem 1
// Does a string follow a 123-456-7890 pattern like a phone number?

var stringPhoneNum = '123-456-7890';
var phonePattern = true;

var stringFunction = function (string, phonePattern) {
	var mySubstring = stringPhoneNum.substring(0,11)
		if (stringPhoneNum === 11){
		console.log('The answer is true');
			}else{
			console.log('The answer is false.');
			}
};
stringFunction(stringPhoneNum, phonePattern);