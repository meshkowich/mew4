$(document).ready(function(){

//burger and scroll
  
  var  mb = $(".burger-container");
    mn = $(".menu");
    mbs = "burger-container-scrolled";
    mns = "menu-scrolled";
    hdr = $('header').height() + 15;
    contHeight = $(".burger-container").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mb.addClass(mbs);
    mn.addClass(mns);
    $(".burger-container-space").height(contHeight);
  } else {
    mb.removeClass(mbs);
    mn.removeClass(mns);
    $(".burger-container-space").height(0);
  }
});  
  

// burger animation
  $(".burger").on('click', function(){
      $(this).toggleClass("change");
  });
  
  $(".burger").on('click', function(){
      $('.menu').toggleClass("closed");
//      $('.aside-left').toggleClass("closed");
  });
  
//  menu close and smooth scroll 
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    $('.menu').toggleClass("closed");
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

// menu adjustment to fit in wrapper  
w = 0;
if($(window).width() < 480) 
{    
w = $(".content-wrapper").width();
console.log(w);
$(".menu").width(w);
$(".menu-scrolled").width(w);
} else {
console.log("screen is wider than 480");
}
  
});
  
