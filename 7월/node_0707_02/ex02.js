/**
 * http://usejsdoc.org/
 */

var url = require('url');

var _url = 'http://localhost:3000/index.html?id=IT&name=홍길동&pass=1234';
var _url1 = 'https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EC%B7%A8%EC%97%85';

console.log(url);

var queryData = url.parse(_url, true).query;

console.log(queryData);
console.log(queryData.id);
console.log(queryData.name);
console.log(queryData.pass);

var queryData1 = url.parse(_url1, true).query;
console.log(queryData1);
