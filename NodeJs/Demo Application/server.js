const http = require('http');
const server = http.createServer();
server.on("request", (req,res) => {
    res.writeHead(200);
    res.write("Hello World!");
    res.end();
});
server.listen(3000);
console.log("NodeJs server is running, http://localhost:3000");