/**
 * http://usejsdoc.org/
 */

var fs = require('fs');
var content;

fs.readdir('./data', function(error,data){
	
	console.log(data);
	
	
	data.forEach(function(data, i) {
		
		console.log(i+"번째 디렉토리 명  "+data);
		
	});
	
	content = data[0];
	console.log('내부 : '+content);
	
	
	for(var i=0;i<data.length;i++){
		console.log(i+"번째 디렉토리 명  "+data[i]);
	}
	
	
});

console.log('외부 : '+content);