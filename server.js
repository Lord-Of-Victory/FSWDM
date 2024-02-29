var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1 style="font-family: Impact;">Hello Node</h1>');
}).listen(5000);

console.log('Node JS launched Successfully');
