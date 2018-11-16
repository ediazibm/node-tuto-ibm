const http = require('http');

// Create Server
const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

// Activate server
server.listen(4242, () => {
    console.log('Server is running...');
});