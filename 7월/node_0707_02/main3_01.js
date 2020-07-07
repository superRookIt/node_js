
var http = require('http');

var fs = require('fs');

var url = require('url');

var template;

var title;



var app = http.createServer(function(request, response) {

	// 요청한 url주소를 받음

	var _url = request.url;
	
	var queryData = url.parse(_url, true).query;
	
	var title = queryData.id;

	//controller
	
	if (_url == '/') {
		
		title = 'main';
		
		template = fs.readFileSync('index.html', 'utf-8');
		
		//_url = '/index.html'
			
		//data = 'index 페이지가 호출되었습니다. 데이터를 보냅니다';
			
	} else if (title == 'baseball') {
		template =`
<!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
</head>
<body>

<ul>
<li><a href="/">네이버 스포츠 메인페이지</a></li>
<li><a href="/?id=baseball">야구</a></li>
<li><a href="/?id=basketball">농구</a></li>
<li><a href="/?id=soccer">축구</a></li>
<li><a href="/?id=volleyball">배구</a></li>
</ul>



[OSEN=조형래 기자] 혼신의 투구로 기회를 다시 얻었다. 롯데 장원삼이 776일 만에 다시 선발승에 도전한다.

장원삼은 7일 대전 한화생명이글스파크에서 열리는 ‘2020 신한은행 SOL KBO리그’ 정규리그 한화 이글스와의 경기에 선발 등판한다.


</body>
</html>`;
		
		
		// _url = '/baseball.html';
		
		//data = fs.readFileSync('./IT.html', 'utf-8');
		
	}
	
	
	else if (title == 'basketball') {
		template=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${title}</title>
</head>
<body>

<ul>
<li><a href="/">네이버 스포츠 메인페이지</a></li>
<li><a href="/?id=baseball">야구</a></li>
<li><a href="/?id=basketball">농구</a></li>
<li><a href="/?id=soccer">축구</a></li>
<li><a href="/?id=volleyball">배구</a></li>
</ul>

	
	[루키=이동환 기자] 시즌 재개를 앞두고 벤 시몬스가 몸 상태에 대한 강한 자신감을 보였다.

오는 31일(이하 한국시간) 올랜도 디즈니월드에서 2019-2020 NBA 시즌이 재개한다.

필라델피아 세븐티식서스의 벤 시몬스 역시 올랜도로 향해 남은 시즌을 치를 전망이다. 시몬스의 필라델피아는 39승 26패를 기록하며 동부지구 6위에 올라 있다.

시몬스는 리그 중단을 앞두고 계속되는 허리 부상으로 전력에서 이탈한 바 있다. 하지만 중단 기간 동안 회복과 재활에 집중하며 지금은 오히려 더 몸 상태를 만들었다는 것이 그의 설명이다.

시몬스는 7일 NBC스포츠와의 인터뷰에서 "시즌이 개막할 때보다 오히려 지금 몸 상태가 더 좋다"며 "부상 이후 꾸준히 훈련을 해왔다. (리그 재개와 관련해) 어떤 일이 일어나든 준비될 수 있도록 계속 훈련하고 있다"라고 밝혔다.




</body>
</html>`;
		
		
		
	}
	
	else if (title == 'soccer') {
		
		
		
		
	}
	
   else if (title == 'volleyball') {
	   
	   
		
		
	}
	
	
	

//	 else if (_url == '/basketball.html') {
//			_url = '/basketball.html';
//		}
//	
//
//	 else if (_url == '/soccer.html') {
//			_url = '/soccer.html';
//		}
//	
//
//	 else if (_url == '/volleyball.html') {
//			_url = '/volleyball.html';
//		}
//	
	
	
	else{
		response.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'});
		response.end('페이지가 없습니다');
		return;
		
	}

	response.writeHead(200);
	//response.end(fs.readFileSync(__dirname+_url));
	response.end(template);

});

app.listen(3000);