var express = require("express");
const { Uploader } = require("uploader");
const uploader = Uploader({
    apiKey: "free",
});

var app = express();

var path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/uploadFile", function (req, res) {
    res.render("upload.ejs");
});

app.post("/uploadFile", async (req, res) => {
    uploader.open({ multi: true }).then(
        files => {
            if (files.length === 0) {
                console.log('No files selected.')
            } else {
                console.log('Files uploaded:');
                console.log(files.map(f => f.fileUrl));
            }
        }).catch(err => {
            console.error(err);
        });
});

var port = 5000;
app.listen(port, function () {
    console.log("Server started at port:" + port);
})