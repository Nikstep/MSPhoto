$(document).ready(function(){

/*
* SLIDER via Slick
*/
  $('.slider').slick({
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: '25%',
  slidesToShow: 1,
  speed: 800,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
        speed: 800,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/*
* IMAGE HOVER
*/



/*
* LIGHTBOX
*/

var overlay = $("<div/>", { id: "overlay" });
    overlay.appendTo("body").hide(),
    image = $("<img/>", { id: "image"}),
    image.appendTo("#overlay").hide();
    
$(".gallery").on("click", "a", function() {
  event.preventDefault();
   
   var href = $(this).attr("href");
   $("#image").attr("src", href);

    overlay.html( image.show() )
            .fadeIn(400);
   
});

$(document).on("click", "#overlay", function() {
    $(this).fadeOut(400);
});


$(document).on("keyup", function() {
    if( event.which == 27) {
        overlay.fadeOut(400);
    }
});


/*
* GALLERY import via AJAX
*/


    var gallery = $(".gallery"),
        selected = $(".controls").find(".selected");

    $(".controls a").on("click", function(event) {
        event.preventDefault();

        var a = $(this),
            li = a.parent(),
            href = a.attr("href");

        if (selected.is( li ) ) return;

        selected = li;

        li.addClass("selected").siblings().removeClass("selected");

        gallery.load(href + " .gallery-set");
    });

});