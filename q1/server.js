var http = require('http');
var fs = require('fs');
var url = require('url');
const { info } = require('console');
http.createServer(function (req, res) {
    fs.readFile('20BIT0053--info.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);