$(document).ready(function() {
  /*
   * SLIDER via Slick
   */
  $(".slider").slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 800,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
          speed: 800
        }
      },
      {
        breakpoint: 760,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  /*
   * IMAGE HOVER
   */

  //Eventualy made via CSS.

  /*
   * LIGHTBOX
   */

  //Created hidden overlay and attached to end of body.
  var overlay = $("<div/>", { id: "overlay" });
  overlay.appendTo("body").hide(),
    //Created hidden image element without url and attached to overlay.
    (image = $("<img/>", { id: "image" })),
    image.appendTo("#overlay").hide();
  //On click at href in gallery, extracted and stored in var href its href attribute.
  //@"a" transfered after handler for AJAX implemented gallery at /omně.html.
  $(".gallery").on("click", "a", function() {
    event.preventDefault();

    var href = $(this).attr("href");
    //Image in overlay gets its href attribute.
    $("#image").attr("src", href);
    //Show overlay.
    overlay.html(image.show()).fadeIn(400);
  });
  //close option1
  $(document).on("click", "#overlay", function() {
    $(this).fadeOut(400);
  });

  //close option2
  $(document).on("keyup", function() {
    if (event.which == 27) {
      overlay.fadeOut(400);
    }
  });

  /*
   * GALLERY import via AJAX
   */

  var gallery = $(".gallery"),
    selected = $(".controls").find(".selected");
  //On click at link in controls, extracted its href attribute.
  $(".controls a").on("click", function(event) {
    event.preventDefault();

    var a = $(this),
      li = a.parent(),
      href = a.attr("href");
    //Preventing load of preselected gallery.
    if (selected.is(li)) return;

    selected = li;
    //Change of selected link appearance.
    li.addClass("selected")
      .siblings()
      .removeClass("selected");
    //Load gallery-set from selected page.
    gallery.load(href + " .gallery-set");
  });

  /**
   * RESPONSIVITY
   */

  //Toggle of hamburger menu and animation of regular.
  $(".hamburger").on("click", function() {
    $(this).toggleClass("isActive");
    if ($(".menu").hasClass("isOn")) {
      $(".menu")
        .slideUp(500)
        .removeClass("isOn");
      $(".social")
        .fadeOut(300)
        .removeClass("isOn");
    } else {
      $(".menu")
        .slideDown(500)
        .addClass("isOn");
      $(".social")
        .fadeIn(300)
        .addClass("isOn");
    }
    // $(".menu").toggleClass("isOn");
    // $(".social").toggleClass("isOn");
  });

  //As position of menu is fixed, it will be hidden with scroll.

  var match = window.matchMedia("(max-width: 1024px)");
  if (match.matches) {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $(".social").removeClass("isOn");
        $(".hamburger").removeClass("isActive");
        $(".menu")
          .slideUp(500)
          .removeClass("isOn");
      }
    });
  }

  /**
   * CONTACT FORM
   */

  //
  $(function() {
    var contactForm = $("#contactForm");
    //Standard AJAX/PHP form
    $(contactForm).submit(function(event) {
      event.preventDefault();

      var formData = $(contactForm).serialize();

      $.ajax({
        type: "POST",
        url: $(contactForm).attr("action"),
        data: formData
      })
        .done(function(response) {
          //Alert of message returned by server
          alert(response);
          //Reset of fields
          $("#name").val("");
          $("#email").val("");
          $("#phone").val("");
          $("#textarea").val("");
        })
        .fail(function(data) {
          if (data.responseText !== "") {
            alert(data.responseText);
          } else {
            alert(
              "Oops! Někde se stala chyba a váše zpráva nemohla být odeslaná."
            );
          }
        });
    });
  });
});
