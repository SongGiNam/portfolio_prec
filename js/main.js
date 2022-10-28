$(function () {

    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('.list>div').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.con>div').eq(i).fadeIn().siblings().hide();
    });

    $('.con>div .close').on('click', function () {
        $(this).parents('.wide_play').fadeOut();
    })

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    });

    $('.tab li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).css({ display: 'flex' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('#menu_toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#menu').toggleClass('show');
    })

    let home = $('#home').offset().top;
    let profile = $('#profile').offset().top;
    let works_top = $('#works_top').offset().top;
    let contact = $('#contact').offset().top;

    $('#goTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#menu li a').on('click', function () {
        //e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        });
    })


























}); // html, css문서 다 읽고 제일 마지막에 읽으라는 opening 구문