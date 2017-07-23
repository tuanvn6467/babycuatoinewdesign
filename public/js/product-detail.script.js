$(document).ready(function(){
    $("#breadcrumbs").rcrumbs();

    $(".thumb-carousel").owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        navText: ["<img src='public/img/left-arrow.png'>","<img src='public/img/right-arrow.png'>"],
        margin: 20,
        mouseDrag: false,
        rewind: false,
        slideBy: 1,
        lazyLoad: true,
        lazyContent: false,
        responsive: {
            0: {
                items: 2
            },
            321: {
                items: 3
            },
            600: {
                items: 3
            },
            992: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    // handle thumb gallery
    $(".trigger-large-image").bind('click', function(e){
        e.preventDefault();

        $(this).parents('div.owl-item').siblings('div').find('.thumb-item').removeClass('active');
        $(this).parents('div.thumb-item').addClass('active');

        var valImg = $(this).attr('data-large-image');
        $("#change-main-img").attr('src', valImg);
    });
});