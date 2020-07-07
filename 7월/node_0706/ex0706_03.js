/**
 * http://usejsdoc.org/
 */

var os = require('os');
console.log('시스템의 hostname ' + os.hostname());

var directories = [ 'users', 'mike', 'docs' ];
console.dir(directories);

var mergedir = directories.join();
console.log(mergedir); // users,mike,docs

var path = require('path');
var filepath = directories.join(path.sep);
console.log(filepath); // users\mike\docs

var curpath = path.join('users/mike', 'notepad.exe');
console.log('패스 위치 : ' + curpath);

var _url = '1.html';
var filepath1 = path.join('product/event', _url);

if (_url == '1.html') {

	console.log(filepath1);

} else if (_url == '2.html') {

	console.log(filepath1);

}


var filename = 'c:\\users\\mike\\notepad.exe';
console.log('디렉토리 위치 : '+path.dirname(filename)); //디렉토리 위치 : c:\users\mike

path.basename(filename);
console.log('파일 이름 : '+path.basename(filename)); //파일 이름 : notepad.exe

path.extname(filename);
console.log('파일 확장자 명 : '+path.extname(filename)); //파일 확장자 명 : .exe


