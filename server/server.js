const http = require('http');

const requestListener = (req, res) => {
    // with req object, we can read what url the user is requesting
    // what api are they coming from, what parameters are the sending along
    // We can write data back to the requester using the response object 
    res.end('Hello Node\n');
}

const server = http.createServer();
server.on(request, requestListener);

server.listen(4242, () => {
    console.log('Server is running...');
});