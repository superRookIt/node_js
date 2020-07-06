/**
 * 
 */


var cal = require('./cal'); // require는 cal.js의 export를 가져옴
var cal2 = require('./cal2'); // 경로 : ./ 


console.log("더하기 : " +cal.add(10, 5));

console.log("cal2 더하기 : " +cal2.add(10, 5));

console.log("cal2 빼기 : " +cal2.sub(10, 5));

console.log("cal2 곱하기 : " +cal2.mul(10, 5));

console.log("cal2 나누기 : " +cal2.div(10, 5));