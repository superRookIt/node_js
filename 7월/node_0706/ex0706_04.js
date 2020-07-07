/**
 * http://usejsdoc.org/
 */

var url = require('url');
var queryString = require('querystring');

var addressUrl = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EB%89%B4%EC%8A%A4');
var addressUrl1 = url.parse('http://localhost:3000/1.html?id=css');

console.log('모듈 객체 변환 : ');
console.dir(addressUrl);

var param = queryString.parse(addressUrl.query);
console.log('요청 파라미터 중 query의 값 출력 : '+param.query);
var param1 = queryString.parse(addressUrl1.query);
console.log('요청 파라미터 중 id의 값 출력 : '+param1.id);

console.log(addressUrl1.query);
console.log(url.parse(addressUrl1,true).query);



/*
console.log('format: ');
var addressStr = url.format(addressUrl1);
console.log('주소 문자열 : '+addressStr);

*/


