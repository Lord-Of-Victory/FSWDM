const fs = require('fs'); console.log('Before file read');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('File content:', data);
    }
});

console.log('After file read');
