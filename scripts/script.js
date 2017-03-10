$(document).ready(function(){

//burger scroll
  
  var  mb = $(".burger-container");
    mn = $(".menu");
    mbs = "burger-container-scrolled";
    mns = "menu-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mb.addClass(mbs);
    mn.addClass(mns);
  } else {
    mb.removeClass(mbs);
    mn.removeClass(mns);
  }
});  
  

// burger animation
  $(".burger").on('click', function(){
      $(this).toggleClass("change");
  });
  
  $(".burger").on('click', function(){
      $('.menu').toggleClass("closed");
      $('.aside-left').toggleClass("closed");
  });
  
//  smooth scroll
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
});
  
