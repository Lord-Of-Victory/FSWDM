var express = require('express');
var app = express();

var bodyparser = require('body-parser');
var path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var students=[
    {
        id:1,
        first_name:"abc",
        last_name:"xyz",
        email:"abc@xyz.ccc"
    },
    {
        id:2,
        first_name:"abc11",
        last_name:"xyz22",
        email:"abc11@xyz22.ccc"
    },
    {
        id:3,
        first_name:"123abc",
        last_name:"123xyz",
        email:"123abc@123xyz.ccc"
    }
];

app.get('/students',function(req,res){
    res.render('index.ejs',{
        title:"RCOEM MCA Students",
        users:students
    })
})

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/loginPage.html')
})

app.use(bodyparser.urlencoded({extended:true}))
app.post('/login',function (req,res) {
    var username =req.body.username;
    var password = req.body.password;
    if (username=='admin' && password == 'admin') {
        res.redirect('/students')
        // res.send("login Successful")
    }else{
        res.send('Wrong Credentials')
    }
})

var port=5000
app.listen(port,function(){
    console.log("Server started at port:"+port)
})