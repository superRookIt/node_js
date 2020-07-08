/*
                 서버구동
*/



var http = require('http');

var fs = require('fs');

var url = require('url');

var content;

var list;

var template;



//body id 파일 내용
function templatehtml(title,list,content){
	
	template=
		
		`<!DOCTYPE html>
		<html>
		<head>
		<meta charset="UTF-8">
		<title>${title}</title>
		</head>
		<body>
		
		<a href="/">main</a>
		
		${list}
		
		<a href='/create'>메뉴추가</a>
		
		${content}

		</body>
		</html>`;

	return template;


}





// 메뉴부분
function templatedir(){
	
	fs.readdir('./naver', function(error, filelist){
		
		list = '<ul>';
		
		for(var i=0;i<filelist.length;i++){
			
			list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
			
		}
		
		list += '</ul>';
		
	});

	return list;

}






var app = http.createServer(function(request, response) {

	var _url = request.url;
	
	var queryData = url.parse(_url, true).query;
	
	var pathname = url.parse(_url,true).pathname;
	
	var title = queryData.id;
	
	list = templatedir();
	
	// controller
	
		if (pathname == '/') {

		if (title == undefined) {
			
			title='main';
			
			content = fs.readFileSync('./naver/index', 'utf-8');
			
			template = templatehtml(title,list,content);
			
			} 
		
		else  {
			
			content = fs.readFileSync(`./naver/${title}`, 'utf-8');
			
			template = templatehtml(title, list, content);
			
			}

       }
		
		else if (pathname == '/create'){
		
		title='create';
		content = fs.readFileSync('form.html', 'utf-8');
		template = templatehtml(title, list, content);
		
		
	}
		else if (pathname == '/create_result'){
			
			title='create';
			content = fs.readFileSync('form.html', 'utf-8');
			
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




