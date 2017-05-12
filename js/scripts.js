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

  // if (this.pizzaIngredients.length === 0) {
  //   price *= 1;
  // } else {
  //   price += this.pizzaIngredients.length;
  // }

  return price;
};


// USER INTERFACE

$(document).ready(function() {
  $("form#pizza-order-form").submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pizzaIngredients.push($(this).val());
    });

    var pizzaPrice = newPizza.calculatePrice()
    var pizzaSizeInput = $("select#pizza-size").val();

    $(".pizza-size").text(pizzaSizeInput);
    $(".pizza-ingredients").text(newPizza.pizzaIngredients);
    $(".order-total").text(pizzaPrice);

    $("#pizza-order").show();
    $("#pizza-order-form").hide();

  });
});
