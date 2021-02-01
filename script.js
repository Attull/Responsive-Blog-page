//for carausal implementation

$(document).ready(function(){
      $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="next"><img src="images/arrow-right.png"></button>',
        prevArrow: '<button class="prev"><img src="images/arrow-left.png"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });
  

//hide nav bar when scroll down

var lastScrollTop=0;
navbar= document.getElementById("navbar");
window.addEventListener("scroll",function(){
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop

    if(scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    }
    else{
        navbar.style.top="0";
    }
    lastScroLLTop=scrollTop;
})

