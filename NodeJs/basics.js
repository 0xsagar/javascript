//* print everything *//
// var names = ["Ram", "Shyam", "Ghanshyam"]
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

//* sum of two numbers *//
// var sum = function(x,y){
//     return x+y;
// }
// console.log(sum(10,20))


//* Terminal command : node basics.js NAME Greet NAME *//

// var greeter = function(name){
// console.log("Hello " + name +"!");
// }
// var userName = null;
// if (process.argv.length > 2) {
// userName = process.argv[2];
// }else{
// userName = "Guest";
// }
// greeter(userName);

// * Creating a Web Server *//
var http = require('http');
const { type } = require('os');

var Server = http.createServer(function(req, res) {
    // Write response header
    res.writeHead(200, {"Content-type" : "text/html"});
    // Write the body of the response
    res.write("<html><body>");
    res.write("<h1>Hello World!</h1>");
    res.write("</body></html>");
    //Send the response
    res.end();
});

Server.listen(3000, function(){
    console.log("Server is listening on port 3000");
});