/**
 * http://usejsdoc.org/
 */


console.log('현재 실행한 파일 패스 위치 : '+__dirname);
console.log('현재 실행한 파일 명 : '+__filename);

var _url='1.html';
console.log('이동 페이지 : '+__dirname +_url);

//배열선언
var person =['d:/workspace','node_0706','index.html']; //대괄호[]
console.dir('배열 출력 : '+person);

//객체선언
var obj={name:'소녀시대', age:20}; //중괄호{}
console.dir(obj);


var person =[{name:'홍길동', age:20},{name:'김유신',age:30}];
console.dir(person);




var arr2=[10,20,30,40,50];

console.time('for');

for(var i=0;i<arr2.length;i++){
	console.log((i+1)+"번째 값 : " +arr2[i]);
}

console.timeEnd('for');


console.time('foreach');

arr2.forEach(function(item,index){

	console.log((index+1)+"번째 데이터 값 : "+item);
	
});

console.timeEnd('foreach');




