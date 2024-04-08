const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(arr) {
  if (typeof(arr[0]) != 'number'){
    return 0;
  }
	return arr.reduce((acc, curr) => acc + curr);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {

	if (a == 0){
    return 1;
  }

  else {
    return factorial(a -1) * a;
  }
};




// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
