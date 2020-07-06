/**
 * http://usejsdoc.org/
 */


var compare = {};

compare.big = function(a,b){
	
	if(a>b){
		return a;
	}else{
		return b;
	}
	
};

compare.small = function(a,b){
	if(a<b){
		return a;
	}else{
		return b;
	}
};

module.exports = compare;