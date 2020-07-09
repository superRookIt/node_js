/**
 * http://usejsdoc.org/
 */


var fs = require('fs');

var title = 'world';

var content= `</strong>(서울=연합뉴스) 김예나 기자 = 국내 신종 코로나바이러스 감염증(코로나19)이 수도권과 광주, 대전 등
 곳곳으로 퍼지면서 9일 일일 신규 확진자는 50명을 기록했다.</strong><br>`;


fs.writeFile(`./data/${title}`, content, function(error){
	
	
	if(error){
		console.log('파일 쓰기 에러 : '+error);
		return;
	}
	
	
	
	fs.readdir('./data', function(error, data){
		
		data.forEach(function(item,index){
			
			console.log((index+1)+'번째 리스트 : '+item);
			
		});
		
	});
	
	
	console.log('파일 쓰기 완료');
	
	
	
	
});
