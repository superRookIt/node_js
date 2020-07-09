/**
 * http://usejsdoc.org/
 */



var url = require('url');

var querystring = require('querystring');

//var _url = 'http://localhost:3000/?id=economy&pass=1234';

var _url2 = url.parse('http://localhost:3000/?id=economy&pass=1234');

var querydata = querystring.parse(_url2.query);

console.log(querydata.id);



//var querydata = url.parse(_url,true).query;
//
//console.log(querydata);
//
//console.log(querydata.id);
//console.log(querydata.pass);




