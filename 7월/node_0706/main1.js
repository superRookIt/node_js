

var http = require('http'); // http 모듈 들고와서 사용
var fs = require('fs'); // filesystem
var path = require('path');
var url = require('url');


var filepath = path.join(__dirname, '1.txt');
console.log(filepath);


var txt_1 = fs.readFileSync(filepath, 'utf-8'); // 비동기식
console.dir("readFileSync : " + txt_1);


var html1 = fs.readFile('file1.html', 'utf-8', function(error, data) { // 동기식

	console.log('readFile : ' + data);

});



var app = http.createServer(function(request, response) {
	
	//server주소/파일명

	var _url = request.url; 
	// ex) http://localhost:3000/1.html
	
//    var query = url.parse(_url.true).query;
	
	if (_url == '/') {
		_url = '/index.html';
	} 
	
	else {
		response.writeHead(404);
		response.end();
		return;
	}
	
	response.writeHead(200);
	response.end(fs.readFileSync(__dirname+_url));
	

});

app.listen(3000);
