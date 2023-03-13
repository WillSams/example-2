const http = require('http');
const port = 3002;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Example-2 Application - Hello, world! - test ECR\n');
});

server.listen(port, () => {
    console.log(`Port forwarded server running at http://localhost:${port}/`);
});
