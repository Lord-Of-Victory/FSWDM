const express = require('express');
const router = express.Router();
const fileUpload = require("express-fileupload");

router.post("/", function (req, res) {
    let fileToUpload;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
  
    // The name of the input field (i.e. "fileToUpload") is used to retrieve the uploaded file
    fileToUpload = req.files.fileToUpload;
    uploadPath = __dirname + "/somewhere/on/your/server/" + fileToUpload.name;
  
    // Use the mv() method to place the file somewhere on your server
    fileToUpload.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
  
      res.send();
    });
  });

module.exports = router;