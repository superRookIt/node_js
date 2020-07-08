
//var http = require('http');

//console.dir(http);

//var fs = require('fs');

//console.dir(fs);

//var url = require('url');

//console.dir(url);


var http = require('http');

var fs = require('fs');

var app = http.createServer(function(request,response){
  
	var url = request.url;
   
    if(request.url == '/'){
      url = '/index.html';
    }
    
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
    
 
});


app.listen(3000); //localhost:3000





