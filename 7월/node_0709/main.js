/**
 * http://usejsdoc.org/
 */


var http = require('http');

var url = require('url');

var fs = require('fs');

var qs = require('querystring');

var title='';

var content='';

var template='';


var app = http.createServer(function(request,response){
	
	var _url = request.url; // 입력된 url 주소
	
	var querydata = url.parse(_url,true).query;
	
	var q_title = querydata.id; //?id=q_title
	
	var pathname = url.parse(_url,true).pathname;
	
	var dirlist;
	
	console.log(querydata);
	
	console.log(pathname);
	
	
	if(pathname == '/'){
		
		if(q_title == undefined){
			
			fs.readFile('index.html','utf-8', function(err,data){
				
				title = 'economy';
				
				content='<strong>index 페이지</strong>에 들어왔어요<br>';
				
				var list = fs.readdirSync("./data");
				
				dirlist = '<ul>';
				
				list.forEach(function(item, index) {
					
					dirlist += `<li><a href=./?id=${item}>${item}</a></li>`;
					
				});
				
				dirlist += '</ul>';
				
				template =
					`
					<!DOCTYPE html>
					<html>
					<head>
					<meta charset="UTF-8">
					<title>Insert title here</title>
					</head>

					<body>

						<h2>NAVER NEWS</h2>
						
						${dirlist}

						<p> ${content}</p>

					</body>

					</html>`;
				
				response.writeHead(200);
				response.end(template);
				
			});
			
		} //if(title == undefined)
		
	} 
	
	
	else if(pathname == '/create'){
		
		fs.readFile('form.html','utf-8', function(err,data){
			response.writeHead(200);
			response.end(data);
		});
		
	}  
	
	
	else if(pathname == '/create_result'){
		
		var body='';
		
		
		request.on('data', function(data){
			
			body += data;
			
		});
		
		
		request.on('end', function(){
			
			var post = qs.parse(body);
			
			console.log(post);
			
			title = post.title;
			
			content = post.content;
			
			fs.writeFile(`./data/${title}`, content, function(error){
				
			if(error){
				
				console.log('쓰기 실패');
				
			}	
				
			
			   fs.readdir('./data', function(error, data){
				  
				   template ='<html><head></head><body><ul>';
					   
					   
				   data.forEach(function(item,index) {
					   
					   template += `<li>${item}</li>`;
					   
					   console.log(item);
				   	
				   }); //foreach
				   
				   
				    template +='</ul></body></html>';
				   
					response.writeHead(200);
					response.end(template);
				   
				   
			   }); //readdir
			
			   
				
			}); //writefile
			
			
			
		}); //request on
		
		
	}
	
	
	else {
		
		response.writeHead(404);
		response.end('페이지가 없습니다 다시 입력해주세요');
		
	}
	
	
	
	
});

app.listen(3000);