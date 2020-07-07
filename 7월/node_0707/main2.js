/**
 * server구동
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
//var data;

var app = http.createServer(function(request, response) {

	// 요청한 url주소를 받음

	var _url = request.url;

	//controller
	if (_url == '/') {
		_url = '/index.html'
			
		//data = 'index 페이지가 호출되었습니다. 데이터를 보냅니다';
			
	} else if (_url == '/IT.html') {
		_url = '/IT.html';
		
		//data = fs.readFileSync('./IT.html', 'utf-8');
		
	}
	
	
	 else if (_url == '/economy.html') {
			_url = '/economy.html';
		}
	

	 else if (_url == '/politics.html') {
			_url = '/politics.html';
		}
	
	
	else{
		response.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'});
		response.end('페이지가 없습니다');
		return;
		
	}

	//response.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
	response.writeHead(200);
	response.end(fs.readFileSync(__dirname+_url));
	console.log(__dirname);

});

app.listen(3000);


// 동기식(순차적, 직렬)

//var data = fs.readFileSync('1.html', 'utf-8'); // <- ex)8분 걸리면
//console.log('1 동기식으로 처리'); // <- 8분후에 출력
//console.log(data); // <- 8분후에 출력



// 비동기식 (병렬)

//fs.readFile('1.html', 'utf-8', function(err, data) { // <- ex)8분 걸리면
//
//	if (err) {
//
//		console.log('읽기 실패');
//		console.dir(err);
//		return;
//
//	}
//
//	console.log('2 비동기식으로 출력');
//	console.log(data);
//});

//console.log('3 데이터 처리 함'); // <- 다 걸릴때까지 기다리지 않고 개별적으로 바로 실행
