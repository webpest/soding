$(function() {
  function addQty(val) {
    var qty = parseInt(val) + 1;
    var total = 850 * qty;
    $(".qty").text(qty);
    $(".total").text(total);
  }

  function removeQty(val, total) {
    var qty = parseInt(val);
    console.log(total);
    if (qty < 1) {
      $(".qty").text(qty);
      $(".total").text("850");
    } else {
      $(".qty").text(qty - 1);
      $(".total").text(total - 850);
    }
  }

  $(".pay").click(function(e) {
    e.preventDefault();
    alert("I am ready to Pay");
  });

  $(".checkout").click(function(e) {
    e.preventDefault();
    alert("I am ready to Checkout");
  });

  $(".add").click(function(e) {
    e.preventDefault;
    addQty($(".qty").text());
  });

  $(".minus").click(function(e) {
    e.preventDefault;
    removeQty($(".qty").text(), $(".total").text());
  });
});
