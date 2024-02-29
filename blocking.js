var fs = require('fs')

console.log("Blocking IO demo is started");
var data = fs.readFileSync('file.txt');
console.log(data.toString());
console.log("Blocking IO demo is ended");

console.log("  ");
console.log("====================");
console.log("  ");

console.log('Non-Blocking IO demo started');
fs.readFile('file.txt',function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
})
console.log('Non-Blocking IO demo ended');
