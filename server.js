const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<p>Hi guys, my name is emmanuel Iyanu</p>');
});
server.listen(5000);
console.log('Our server is running')