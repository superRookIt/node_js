/**
 * http://usejsdoc.org/
 */

var url = require('url');

var _url = "http://localhost:3000/aaa.html?id=admin&pass=1234&name=홍길동";

var addressUrl = url.parse(_url);

console.log(addressUrl);
console.log('host : '+addressUrl.host);
console.log('hostname : '+addressUrl.hostname);
console.log('pathname : '+addressUrl.pathname);

//host : localhost:3000
//hostname : localhost
//pathname : /aaa.html


var addressQuery = url.parse(_url, true).query;
console.log(addressQuery.id);
console.log(addressQuery.pass);
console.log(addressQuery.name);


var querystring = require('querystring');
var address = url.parse('http://localhost:3000/aaa.html?id=admin&pass=1234&name=홍길동');
var param = querystring.parse(address.query);

console.log(param.id);
console.log(param.pass);
console.log(param.name);

//admin
//1234
//홍길동

