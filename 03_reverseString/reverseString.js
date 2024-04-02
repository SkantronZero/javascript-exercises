const reverseString = function(string) {
let stringArr = string.split('');
///console.log(stringArr);
let stringArrRev = stringArr.reverse();
//console.log(stringArrRev);
let stringCompleteRev = stringArrRev.join('');
//console.log(stringCompleteRev);
return stringCompleteRev;
};

// reverseString('hello world');

// Do not edit below this line
module.exports = reverseString;
