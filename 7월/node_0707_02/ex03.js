/**
 * http://usejsdoc.org/
 */


var url = require('url');

var url1='http://localhost:3000/?name=홍길동&tel=010-1111-1111&address=서울시 금천구 가산동&id=admin&pass=1234&gender=남';

var query = url.parse(url1,true).query;

console.log(query);
	