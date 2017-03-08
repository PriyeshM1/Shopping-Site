var fs = require("fs");
var basket = require("./basket");

function dispatch(req, res){
    var pattern = /.\.(html|js|css)/
    var command = req.url.substring(1).split("/")
    if (pattern.test(command[0])){ 
        render("./" + command[0], req, res)
    } else {
        switch(command[0]){
            case "basket": basket.handle(req, res, command); break;
            case "basketUpdater": basket.handle(req, res, command); break;
            default: 
                res.writeHead(404)
                res.end()    

        }
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

module.exports.dispatch = dispatch
    
