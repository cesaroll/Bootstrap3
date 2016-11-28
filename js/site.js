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
  
  var $sentAlert = $("#sentAlert");
  
  $sentDialog.on("hidden.bs.modal", function () {
    //alert("close");
    $sentAlert.show();
  });
  
  $sentAlert.on("close.bs.alert", function () {
    
    $sentAlert.hide(); // hide instead of remove from DOM
    
    return false; // Prevent standard functionality, do not hide alert and remove it from DOM (May not be required if code is comming from razer, but required for Bootstrap)
  });
  
  $("#contactForm input[type=submit]").tooltip({
    delay: {
      show: 500,
      hide: 0
    }
  });
  
  var $theCarousel = $("#theCarousel");
  
  $theCarousel.carousel();
  
  $theCarousel.on("slid", function () {
    var to_slide = $('.carousel-item.active').attr('data-slide-no');
    $('.myCarousel-target.active').removeClass('active');
    $('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
  });
  
})();