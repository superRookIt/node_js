/**
 * http://usejsdoc.org/
 */


function obj1(a, b) {

	var result = a + b;
	return result;

}

var calc = {};

calc.add = function(a, b) { // 함수를 변수로 받을 수 있음!

	return a + b;

};

calc.sub = function(a, b) {

	return a - b;

};

module.exports = calc;
