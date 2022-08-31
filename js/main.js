// 로딩
const intro = document.querySelector('.intro');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        intro.classList.add('display_none');
    }, 4100);
})

// 애니메이션
const section = $(".sec");
console.log(section);


$(window).scroll(secHandler);

function secHandler(){
    section.each(function(){
        let sct = $(this).offset().top - $(window).height() / 2;
        if(window.pageYOffset >= sct){
            $(this).addClass("active");
            }else {
                $(this).removeClass("active");
            }
    })
}