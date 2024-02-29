var fs = require('fs');

var data = '';

var readStream = fs.createReadStream('file.txt');
readStream.setEncoding('utf-8');

readStream.on('data',function(d){
    console.log(d);
    console.log(":")
});

readStream.on('error',function (err) {
    console.log(err.stack);
});

console.log('Program Ended...');