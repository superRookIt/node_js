/**
 * time
 */

var result = 0;

console.time('time_count'); // 프로그램 시작 시간 입력
// 실행 구문 입력 

for (var i = 1; i < 1000; i++) {
	result += i;
}


console.timeEnd('time_count'); //프로그램 종료 시간 입력
console.log('현재 실행한 파일 이름 : '+__filename);
console.log('현재 실행한 디렉터리 위치 : '+__dirname);

//time_count: 0.138ms
//현재 실행한 파일 이름 : K:\workplace\node_0702\ex0702_02.js
//현재 실행한 디렉터리 위치 : K:\workplace\node_0702