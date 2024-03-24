
class imageUpload {
    static addImage(fileToUpload) {
        uploadPath = __dirname + "/public/images/" + fileToUpload.name;
        fileToUpload.mv(uploadPath, function (err) {
            if (err) return res.status(500).send(err);
        });
    }
}

module.exports = imageUpload;