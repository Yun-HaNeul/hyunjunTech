// 탭

$(function () {
    // $(".fadeTab .conBox").hide().eq(0).show();
    $(".tab ul li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).fadeIn(1000)
            .siblings('.conBox').fadeOut(300);
        $(".tab .txt").hide();
    });
    $(".tab ul").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
});

// 슬라이드

const swiper = new Swiper('.swiper', {
    loop: false,
    observer: true,
    observeParents: true,
});