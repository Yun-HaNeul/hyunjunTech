// 헤더 메뉴

$(function(){
    $(window).on('scroll', function () {
        if (window.pageYOffset >= $('.sec05').offset().top - $(window).height() / 2) {
            $('.menu').addClass('active');
        } else {
           $('.menu').removeClass('active');
        }
    
    });
})


// 탑 버튼

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $(".top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// 메뉴

$('#toggle').click(function () {
    $('#toggle').toggleClass('close');
    $('#overlay').toggleClass('active');
});


// 메뉴

$(document).ready(function () {

    const menuName = $(".menu_name");

    menuName.mouseenter(function(){
        let idx = $(this).index();
        console.log(idx);
        $('.menu_img li').addClass("show");
        $('.menu_bg').addClass("active");
        $('.menu_hover_bg').css({"background":"url(/img/menu_hover_bg_0" + (idx + 1) + ".svg)"});

    })

    // $('.menu_name:nth-child(1)').on('mouseenter', function () {
    //     $('.menu_img li.show').removeClass("show");
    //     $('.menu_img li:nth-child(1)').addClass("show");
    //     $('.menu_bg').addClass("active");
    // })
    // $('.menu_name:nth-child(2)').on('mouseenter', function () {
    //     $('.menu_img li.show').removeClass("show");
    //     $('.menu_img li:nth-child(2)').addClass("show");
    //     $('.menu_bg').addClass("active");
    // })
    // $('.menu_name:nth-child(3)').on('mouseenter', function () {
    //     $('.menu_img li.show').removeClass("show");
    //     $('.menu_img li:nth-child(3)').addClass("show");
    //     $('.menu_bg').addClass("active");
    // })
    // $('.menu_name:nth-child(4)').on('mouseenter', function () {
    //     $('.menu_img li.show').removeClass("show");
    //     $('.menu_img li:nth-child(4)').addClass("show");
    //     $('.menu_bg').addClass("active");
    // })
    // $('.menu_name').on('mouseleave', function () {
    //     $('.menu_img li.show').removeClass("show");
    //     $('.menu_bg').removeClass("active");
    // })

});
