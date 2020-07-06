/**
 * http://usejsdoc.org/
 */


console.log('nodejs 실행');


var cls = {name:'css', content:'css의 내용입니다.'};
 
var num = 1;

var str = 'server를 구동합니다.';

console.log("숫자는 "+num);
console.log("숫자 보여주기  : %d",num);
console.log("문자는 "+str);
console.log("문자 : %s", str);
console.log("객체 : %j", cls);

console.log(cls);
console.dir(cls); //객체는 왠만하면 dir로
