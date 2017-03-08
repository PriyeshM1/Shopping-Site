$(document).ready(function(){
    $.ajax({
      url: "/basket/list",
      context: document.body
    }).done(function(basket) {
      var table = $('#basket-list')
      basket.forEach(function(item, id){
         table.append('<tr><td align="center">' 
                      + item.product.name + 
                      '</td><td align="center">'
                      + item.price + 
                      '</td><td align="center">' 
                      + item.quantity + 
                      '</td><td align="center">' 
                      + (item.price*item.quantity).toFixed(2) +
                      '</td></tr>'
        );              
      });
    var grandTotal = basket.reduce(function(acc, item){ return acc + item.price * item.quantity }, 0).toFixed(2);
    if (grandTotal > 0) {
        $('#basketTotal span').text(" " + grandTotal);
    } else {
        ""
    }
    });
});