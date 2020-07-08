/**
 * http://usejsdoc.org/
 */

var fs= require('fs');


fs.readFile('./naver/car', 'utf-8', function(err, data) {
	
	if(err){
		
		console.log('파일 읽기 에러 : '+err);
		
	}
	
	
	fs.writeFile('./naver/car2', data, function(err){
		
		if(err){
		
			console.log('파일저장 에러 : '+err);
			
		}
		
		console.log('파일 저장 완료');
		
		
	});  //writeFile
	
	
}); //readFile