const express = require('express');
const app = express()
var path = require('path');

app.use('/thisISHTml',express.static(path.join(__dirname,'static')));

app.get('/', function (req, res) {
    res.end('Home Page')
})
app.get('/about', function (req, res) {
    res.end('About Page')
})
app.get('/weather', function (req, res) {
    res.end('Nice weather..... 20Deg outside')
})

app.get('/about/:who', function (req, res) {
    res.end('About,'+req.params.who)
});

app.use(function(req,res){
    res.statusCode = 404;
    res.end('Page NOT found Error 404')
})

app.listen(5000)
console.log("Server started at 5000")
module.exports = app;