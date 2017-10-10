$(function() {
  $(".pay").click(function(e) {
    e.preventDefault();
    alert("I am ready to Pay");
  });

  $(".checkout").click(function(e) {
    e.preventDefault();
    alert("I am ready to Checkout");
  });
});
