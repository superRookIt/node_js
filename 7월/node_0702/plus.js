/**
 * http://usejsdoc.org/
 */

var sum = {};

sum.add = function(a, b) {

	var result = 0;
	
	for (var i = a; i <= b; i++) {
		result += i;
	}

	return result;

};

module.exports = sum;