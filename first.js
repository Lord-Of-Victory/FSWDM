const http = require('http');
const fs = require('fs');

const PORT = 8080;

fs.readFile('./htmlfile.html', function (err, html) {
    if (err) throw err;
    http.createServer(function (request, response) {
        response.writeHeader(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    }).listen(PORT);
});

let data = "This is a sample data.";
fs.writeFile("newhtml.html", data, (err) => {
    if (err)
        console.log(err);
    // else {
    //     console.log("File written successfully\n");
    //     console.log("The written has the following contents:");
    //     console.log(fs.readFileSync("newhtml.html", "utf8"));
    // }
});