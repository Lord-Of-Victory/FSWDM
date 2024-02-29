const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello Express.js')
})

app.listen(5000)
console.log("Server started at 5000")
module.exports = app;