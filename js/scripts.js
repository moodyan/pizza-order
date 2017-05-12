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

// Pizza.prototype.addPrices = function() {
//   var price1 = newPizza.pizzaPrice;
//   var price2 = newPizza2.pizzaPrice;
//
// };

// USER INTERFACE

$(document).ready(function() {
  // $(document).mousemove(function(e){
  //     $(".pizza-cursor").css({left:e.pageX, top:e.pageY});
  // });

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

    $("#pick-up").click(function() {
      $("#pick-up").hide();
      $("#delivery").hide();
      $("#new-pizza-button").hide();
      $(".pick-up").fadeIn("slow");
    });

    $("#delivery").click(function() {
      $("#pick-up").hide();
      $("#delivery").hide();
      $("#delivery-form").show();
    });

    // $('#delivery').click(function() {
    //     $('#deliveryForm').fadeIn();
    //   })
    //   $(document).mouseup(function (e) {
    //     var container = $("#deliveryForm");
    //
    //     if (!container.is(e.target) // if the target of the click isn't the container...
    //         && container.has(e.target).length === 0) // ... nor a descendant of the container
    //     {
    //         container.fadeOut();
    //     }
    //   });

    var checkForm = function(e)
  {
    var form = (e.target) ? e.target : e.srcElement;
    if(form.name.value == "") {
      alert("Please enter your Name");
      form.name.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
    if(form.email.value == "") {
      alert("Please enter a valid Email address");
      form.email.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
    if(form.message.value == "") {
      alert("Please enter your comment or question in the Message box");
      form.message.focus();
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      return;
    }
  };

});
