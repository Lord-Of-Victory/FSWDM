var http = require('http');

http.createServer(function(request,response){
    var url = request.url;

    if (url == '/about'){
        response.write("about page");
        response.end();
    }
    else if (url == '/sales'){
        response.write("Sales page");
        response.end();
    }
    else if (url == '/faq'){
        response.write("Frequently asked questions page");
        response.end();
    }
    else if (url == '/notabout'){
        response.write("NOt about page");
        response.end();
    }
    else if (url == '/contact'){
        response.write("contact page");
        response.end();
    }
    else{
        response.write("Home page");
        response.end();
    }
}).listen(5000);

console.log('Node JS launched Successfully');
