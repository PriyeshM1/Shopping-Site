module.exports.dispatch = function(req, res){
     var command = request.url.substring(1).split("/")
     handlers[command[0]](req, res, command);
}

function render(path, req, res){
    fs.readFile('path', function (error, data){ 
        if (error){
            res.writeHead(404)
            res.end('Page unavailable')
        } else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
    });
}

var handlers = {
    "index.html" : function(req, res, command){  render("./index.html", req, res);  },
    "basket.html" : function(req, res, command){  render("./basket.html", req, res);  },
    "basket" : function(req, res, command){
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
    }
}
    
