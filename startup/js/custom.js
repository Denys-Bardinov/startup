$('.person-list').slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [{
            breakpoint: 1139,
            settings: {
                slidesToShow: 3
            }
    },
    {
            breakpoint: 980,
            settings: {
                slidesToShow: 2
            }
    },
    {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
    }
]

});


$('.slider-list').slick({
    infinite: false,
    arrows: false,
    dots: true
});

$(function () {
    $('.burger_trigger').click(function () {
        $('.menu').toggleClass('menu_opened');
    });
});
