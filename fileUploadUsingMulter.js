var express = require("express");
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
});

var upload = multer({ storage: storage }).single("uploadedFile");
var app = express();

var path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/uploadFile", function (req, res) {
    res.render("upload.ejs");
});

app.post("/uploadFile", async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        } else {
            const fileName = req.file.filename;
            res.status(200).send(fileName);
        }
    });
});

var port = 5000;
app.listen(port, function () {
    console.log("Server started at port:" + port);
});
