	function Product(id, name, price) {
	    this.id = id;
	    this.name = name;
	    this.price = price;
	}


	var products = [
		new Product("0", "Playstation 4", 199.99),
		new Product("1", "XBox One", 249.99),
		new Product("2", "Wii U", 149.99),
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

    total : function() {  
        return this.basket.reduce(function(acc, item){ acc + item.price * item.quantity }, 0)
    },
    
    toString : function(){
        return JSON.stringify(this.basket);
    }
}