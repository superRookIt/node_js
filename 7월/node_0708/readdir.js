

var fs = require('fs');

fs.readdir('./data',function(error,data){
	
	//console.log(data); 
	
	//[ 'economy', 'IT', 'politics' ]
	
	
	for(var i=0;i<data.length;i++){
		
		console.log(`데이터 ${i+1} 번째 배열 값 : `+data[i]);
		
		
		//동기식
		var list = fs.readFileSync(`data/${data[i]}`,'utf-8');
		console.log(list);
		
		
		
		//비동기식
//		fs.readFile(`data/${data[i]}`,'utf-8', function(err,data){
//		
//			console.log(data);
//			
//		});
		
	}
	
	
	
});


