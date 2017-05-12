// BUSINESS LOGIC

function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.pizzaIngredients = [];
  this.pizzaPrice = 0;
};

Pizza.prototype.calculatePrice = function() {
  var price = 0;

  if (this.pizzaSize === "Small") {
    price += 8;
  } else if (this.pizzaSize === "Medium") {
    price += 12;
  } else if (this.pizzaSize === "Large") {
    price += 16;
  } else {
    price += 18;
  }

  if (this.pizzaIngredients.length === 0) {
    price *= 1;
    this.pizzaIngredients.push(" Plain")
  } else {
    price += (this.pizzaIngredients.length * .75);
  }
  var total = price.toFixed(2);
  return total;
};


// USER INTERFACE

$(document).ready(function() {
  $(document).mousemove(function(e){
      $(".pizza-cursor").css({left:e.pageX, top:e.pageY});
  });

  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();

    var pizzaSizeInput = $("select#pizza-size").val();
    var newPizza = new Pizza(pizzaSizeInput);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pizzaIngredients.push($(this).val());
    });

    var pizzaPrice = newPizza.calculatePrice()


    $(".pizza-size-input").text(pizzaSizeInput);
    $(".pizza-toppings-input").text(newPizza.pizzaIngredients);
    $(".order-total").text(pizzaPrice);

    $("#pizza-order").show();
    $("#pizza-order-form").hide();

  });
});
