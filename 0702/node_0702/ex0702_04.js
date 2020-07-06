/**
 * function
 */

var calc = {};

calc.add = function(a, b) {
	return a + b;
};

calc.multi = function(a, b) {
	return a * b;
};

calc.sub = function(a, b) {
	return a - b;
};

calc.div = function(a, b) {
	return a / b;
};

function add(a, b) {
	return a + b;
}

function multi(a, b) {
	return a * b;
}

function sub(a, b) {
	return a - b;
}

function div(a, b) {
	return a / b;
}

add(1, 2); // 이렇게 하면 안 나옴

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multi(1, 2));
console.log(div(1, 2));
