/**
 * argv env exit
 */

// 실행하고 있는 파일 위치 (argv 속성)
console.log(process.argv);
console.log('실행하는 파일 위치 __filename : ' + __filename);

// [
// 'C:\\Program Files\\nodejs\\node.exe',
// 'K:\\workplace\\node_0702\\ex0702_03.js'
// ] 배열형태

// 배열의 길이
console.log("배열의 길이 : " + process.argv.length);

// 배열의 출력
process.argv.forEach(function(index, content) { 

	console.log(index + " : " + content);

});

// C:\Program Files\nodejs\node.exe: 0  (content, index)로 하면 순서가 바뀜!
// K:\workplace\node_0702\ex0702_03.js: 1


var arr1 = ['홍길동', '김유신', '유관순', '강감찬'];
arr1.forEach(function(content, index){
	
	console.log(index + ": " + content);
	
});


//0: 홍길동
//1: 김유신
//2: 유관순
//3: 강감찬


for(var i=0; i<arr1.length;i++){
	console.log(i+" : "+arr1[i]);
}




