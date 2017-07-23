$(document).ready(function(){
    $(".selectpicker").selectpicker();

    $(".deal-carousel").owlCarousel({
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
                items: 1
            },
            321: {
                items: 2
            },
            600: {
                items: 3
            },
            992: {
                items: 4
            },
            1170: {
                items: 5
            }
        }
    });

    // handle vertical menu delay
    $(".main-menu").menuAim({
        activate: function (row) {
            $(row).find("a.menu-parent").addClass('is-active');
            $(row).find(".sub-menu").addClass('is-active');
        },
        deactivate: function (row) {
            $(row).find("a.menu-parent").removeClass('is-active');
            $(row).find(".sub-menu").removeClass('is-active');
        },
        exitMenu: function(){
            $(".main-menu").find('.is-active').removeClass('is-active');
            return true;
        }
    });

    $(".main-menu > li").click(function(e) {
        e.stopPropagation();
    });

    // handle mobile menu
    $("#mobile-menu").mmenu();

    // handle menu scroll
    $(window).bind('load resize', function(){
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        var $scrollMenu = $("#menu-scroll");
        var $this = $(this);
        var $body = $("body");

        if (width > 992) {
            $scrollMenu.removeClass('hidden');
            if ($this.scrollTop() > 244){
                $body.addClass('open-menu-scroll');
            } else {
                $body.removeClass('open-menu-scroll');
            }
            $this.bind('scroll', function(){
                if ($this.scrollTop() > 244){
                    $body.addClass('open-menu-scroll');
                } else {
                    $body.removeClass('open-menu-scroll');
                }
            });
        } else {
            $scrollMenu.addClass('hidden');
        }
    });

    // handle filter search
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

    // handle scroll top
    $(window).bind('scroll', function() {
       if ($(this).scrollTop() > 0) {
           $("#trigger-totop").fadeIn('500');
       } else {
           $("#trigger-totop").fadeOut('500');
       }
    });

    $("#trigger-totop").bind('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
           scrollTop: 0
        }, 500);
        return false;
    });
});
