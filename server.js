var http = require("http");
var dispatcher = require("./dispatcher.js");

var host = "localhost";
var port = 1337;

var server = http.createServer(function(request, response){
  dispatcher.dispatch(request, response);
	console.log("Received request: "  + request.url + ", method: " + request.method)
})

console.log("Starting...");
server.listen(port, host, function(){
	console.log("Listening " + host + ":" + port);
})