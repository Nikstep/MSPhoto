$(document).ready(function(){
$('.slider').slick({
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  centerPadding: '25%',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1
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
});