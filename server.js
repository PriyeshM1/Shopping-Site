var http = require("http");
var fs = require("fs");
//var products = require("Products")
//var Dispatcher = require("dispatcher")
//var dispatcher = new Dispatcher(products);
var basket = require("./basket")

var host = "localhost";
var port = 1337;

var server = http.createServer(function(request, response){
    var command = request.url.substring(1).split("/")
    switch(command[0]){
        case "index.html":
            fs.readFile('./index.html', function (error, data){ 
                if (error){
                    response.writeHead(404)
                    response.end('Page unavailable')
                } else {
                    response.writeHead(200, {'Content-Type':'text/html'})
                    response.end(data)
                }
            });
            break;
        case "basket.html":
            fs.readFile('./basket.html', function (error, data){ 
                if (error){
                    response.writeHead(404)
                    response.end('Page unavailable')
                } else {
                    response.writeHead(200, {'Content-Type':'text/html'})
                    response.end(data)
                }
            });
            break;
        case "basket":
            switch(command[1]){
                case "list":
                    var data = basket.toString();
                    response.setHeader("Content-Type" , "application/json");
                    response.end(data);
                    break;
                case "addItem":
                    var productId = command[2];
                    var quantity = 1;
                    basket.addItem(productId, quantity)
                    response.writeHead(302, {
                       'Location' : "/basket.html" 
                    });
                    response.end();
                    break;
                case "removeItem":
                    var productId = command[2];
                    var quantity = 1;
                    basket.removeItem(productId, quantity)
                    response.writeHead(302, {
                       'Location' : "/basket.html" 
                    });
                    response.end();
                    break;
                case "removeAll":
                    var productId = command[2];
                    basket.removeAll(productId)
                    response.writeHead(302, {
                       'Location' : "/basket.html" 
                    });
                    response.end();
                    break;
                case "clearBasket":
                    var productId = command[2];
                    basket.clearBasket(productId)
                    response.writeHead(302, {
                       'Location' : "/basket.html" 
                    });
                    response.end();
                    break;
            }            
            break;
        default:
    }
	console.log("Received request: "  + request.url + ", method: " + request.method)
})

console.log("Starting...");
server.listen(port, host, function(){
	console.log("Listening " + host + ":" + port);
})