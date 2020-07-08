/*
                 서버구동
*/



var http = require('http');

var fs = require('fs');

var url = require('url');

var template, content;

var list;




var app = http.createServer(function(request, response) {

	// 요청한 url주소를 받음

	var _url = request.url;
	
	var queryData = url.parse(_url, true).query;
	
	
	//https://localhost:3000/jardin/id=IT에서 jarin이 pathname (기본값은 '/') & jardin/id=IT는  path
	var pathname = url.parse(_url,true).pathname;
	
	
	//id=IT
	var title = queryData.id;
	
	
	//메뉴부분
	fs.readdir('./data', function(error, filelist){
		
		list = '<ul>';
		
		for(var i=0;i<filelist.length;i++){
			
			list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
			
		}
		
		list += '</ul>';
		
	});
	
	
	
	// controller
	
		if (pathname == '/') {

		if (title == undefined) {
			
			title='main';
			
			content = `<h1>안녕하세요 뉴스 메인 페이지입니다</h1>`;
			
			template=`<!DOCTYPE html>
				<html>
				<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				</head>
				<body>
				
				<a href="/">main</a>
				
				${list}
				
				${content}

				</body>
				</html>`;
			
			} 
		
		else  {
			
			content = fs.readFileSync(`./data/${title}`, 'utf-8');
			
			template=`<!DOCTYPE html>
				<html>
				<head>
				<meta charset="UTF-8">
				<title>${title}</title>
				</head>
				<body>
				
				<a href="/">main</a>
				
			    ${list}
				
				<h3>${title}</h3>
				
				${content}

				</body>
				</html>`;
			}

	}
		
		
		else{
		response.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'});
		response.end('페이지가 없습니다');
		return;
		
	}
		
	response.writeHead(200);
	response.end(template);

	
});


app.listen(3000);




