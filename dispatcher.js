var fs = require("fs");
var basket = require("./basket");

function dispatch(req, res){
     var command = req.url.substring(1).split("/")
    switch(command[0]){
        case "index.html": renderIndex(req, res, command); break;
        case "basket.html": renderBasket(req, res, command); break;
        case "basket": basket.handle(req, res, command); break;
        default: 
            res.writeHead(404);
            res.end()
    }
}

function render(path, req, res){
    fs.readFile(path, function (error, data){ 
        if (error){
            res.writeHead(404)
            res.end('Page unavailable')
        } else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
    });
}

function renderIndex(req, res, command){  render("./index.html", req, res);  }
function renderBasket(req, res, command){  render("./basket.html", req, res);  }

module.exports.dispatch = dispatch
    
