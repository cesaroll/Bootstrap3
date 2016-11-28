(function () {
  'use strict';  
  
  
  var $pickButton = $('#pickButton');
  
  $("#reasonDropdown li a").on('click', function () {
    var reason = $(this).text();
    $pickButton.text(reason);
  });
  
  var $sentDialog = $("#sentDialog");
  
  $("#contactForm").on("submit", function () {
    
    $sentDialog.modal('show');
    
    return false; // Do not complete form submition
  });
  
  
  $sentDialog.on("hidden.bs.modal", function () {
    alert("close");
  });
  
})();