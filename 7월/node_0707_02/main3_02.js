
var http = require('http');

var fs = require('fs');

var url = require('url');

var template;

var app = http.createServer(function(request, response) {

	// 요청한 url주소를 받음

	var _url = request.url;
	
	var queryData = url.parse(_url, true).query;
	
	var pathname = url.parse(_url,true).pathname;
	
	var title = queryData.id;

	// controller

	//https://localhost:3000/id=타이틀명
	
		if (pathname == '/') {

		if (title == undefined) {
			
			title='main';
			
			template=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
</head>
<body>


<ul>
<li><a href="/">${title}</a></li>
<li><a href="/?id=baseball">야구</a></li>
<li><a href="/?id=basketball">농구</a></li>
<li><a href="/?id=soccer">축구</a></li>
<li><a href="/?id=volleyball">배구</a></li>
</ul>


</body>
</html>`;
			// main
		} else if (title == 'baseball') {
			// IT
		} else if (title == 'basketball') {
            // basketball
		} else if (title == 'soccer') {

		} else if (title == 'volleyball') {

		}else{
			response.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'});
			response.end('페이지가 없습니다');
			return;
			
		}

	}
		
	response.writeHead(200);
	response.end(template);

	
});


app.listen(3000);




