function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}


var products = [
    new Product("0", "PlayStation 4 Pro", 349.99),
    new Product("1", "Xbox One", 224.99),
    new Product("2", "Nintendo Switch", 274.99),
    new Product("3", "PlayStation 4 Controller", 44.99),
    new Product("4", "Xbox One Controller", 39.99),
    new Product("5", "HDMI Cable", 9.99),
    new Product("6", "USB-A to USB-C Cable", 4.99),
    new Product("7", "FIFA 17 - PS4", 29.99),
    new Product("8", "FIFA 17 - Xbox One", 29.99),
    new Product("9", "Call of Duty - PS4", 39.99),
    new Product("10", "Call of Duty - Xbox One", 39.99),
    new Product("11", "Zelda - Nintendo Switch", 29.99),
    ]; 

function Item (product, price, quantity) {
    this.product = product
    this.price = price
    this.quantity = quantity
}

module.exports = { 
     
basket: [],
   
   addItem : function(productId, quantity){
       function basketItem(item){
           return item.product.name == products[productId].name
       }
       
       var product = products[productId]
       var item = this.basket.find(basketItem)
       if(item){
           item.quantity += quantity;
       } else {
        var itemToAdd = new Item(product, product.price, quantity);
        this.basket.push(itemToAdd);
       }
   },

    removeItem : function(productId, quantity) {
        function basketItem(item){
           return item.product.name == products[productId].name
        }
       var product = products[productId]
       var item = this.basket.find(basketItem)
       if(item){
           item.quantity --;
           if (item.quantity === 0) {
               var itemToRemove = this.basket.findIndex(basketItem)
               this.basket.splice(itemToRemove, 1);
           }
       }
    },
    
    removeAll : function(productId, quantity) {
        function basketItem(item){
           return item.product.name == products[productId].name
        }
       var product = products[productId]
       var item = this.basket.find(basketItem)
       if(item){
               var itemToRemove = this.basket.findIndex(basketItem)
               this.basket.splice(itemToRemove, 1);
       }
    },
    
    clearBasket : function(productId) {
        this.basket = [];
    },
    
    clearBasketHome : function(productId) {
    this.basket = [];
    },

    toString : function(){
        return JSON.stringify(this.basket);
    },
    
    handle : handle
}

function handle(req, res, command){
    switch(command[1]){
            case "list":
                var data = this.toString();
                res.setHeader("Content-Type" , "application/json");
                res.end(data);
                break;
            case "addItem":
                var productId = command[2];
                var quantity = 1;
                this.addItem(productId, quantity)
                res.writeHead(302, {
                   'Location' : "/basket.html" 
                });
                res.end();
                break;
            case "removeItem":
                var productId = command[2];
                var quantity = 1;
                this.removeItem(productId, quantity)
                res.writeHead(302, {
                   'Location' : "/basket.html" 
                });
                res.end();
                break;
            case "removeAll":
                var productId = command[2];
                this.removeAll(productId)
                res.writeHead(302, {
                   'Location' : "/basket.html" 
                });
                res.end();
                break;
            case "clearBasket":
                var productId = command[2];
                this.clearBasket(productId)
                res.writeHead(302, {
                   'Location' : "/basket.html" 
                });
                res.end();
                break;
            case "clearBasketHome":
                var productId = command[2];
                this.clearBasket(productId)
                res.writeHead(302, {
                   'Location' : "/index.html" 
                });
                res.end();
                break;
    }
}