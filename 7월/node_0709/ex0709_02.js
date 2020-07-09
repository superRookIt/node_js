/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

var econemoy_data = fs.readFileSync('./data/economy', 'utf-8');

console.log(econemoy_data);

fs.readFile('./data/economy', 'utf-8', function(err, data) {
	
	console.log('비동기');
	console.log(data);
	
});


console.log('출력');