$(window).scroll(function(){
    if($(window).scrollTop() > 60) {
        $("header").addClass("active");
    }else{
        $("header").removeClass("active");
    }
})

$(document).ready(function(){
    $(".hamburger").click(function(){
        $("body").addClass("ohidden");
        $(".overlay").fadeIn();
        $(".navlist").animate({"left" : "0"});
    })
    $(".overlay").click(function(){
        $("body").removeClass("ohidden");
        $(".overlay").fadeOut();
        $(".navlist").animate({"left" : "-220px"});
    })

    $('.menu-dish-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/icons/left-arrow.png" alt=""></div>',
        nextArrow: '<div class="slide-arrow next-arrow"><img src="images/icons/right-arrow.png" alt=""></button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
})