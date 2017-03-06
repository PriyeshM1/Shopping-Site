	function Product(id, name, manufacturer, price) {
	    this.id = id;
	    this.name = name;
	    this.manufacturer = manufacturer;
	    this.price = price;
	}


	var products = [
		new Product("1", "Playstation 4", "Sony", 199.99),
		new Product("2", "XBox One", "Microsoft", 249.99),
		new Product("3", "Wii U", "Nintendo", 149.99),
		]; 

function Item (product, price, quantity) {
    this.product = product
    this.price = price
    this.quantity = quantity
}