const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('welcome baby girl');
    res.end();
});

server.listen(5000);