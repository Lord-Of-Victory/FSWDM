var fs = require('fs');

var data = 'Some data to be written';

var writeStream = fs.createWriteStream('file.txt');
writeStream.write(data);
writeStream.end();

writeStream.on('finish',function () {
    console.log('Finished');
});

writeStream.on('error',function (err) {
    console.log(err.stack());
});

console.log('Program Ended...');