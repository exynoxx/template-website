$("#button0").click(function() {
    $('html, body').animate({
        scrollTop: $(".frontpage").offset().top
    }, 400);
});
$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $(".page1").offset().top - 120
    }, 500);
});
$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $(".page2").offset().top - 59
    }, 500);
});

var blueFunc = function () {
    $(".header").animate({
        backgroundColor: 'rgba(53,73,255,0.9)'
    },500);
};

var redFunc = function () {
    $(".header").animate({
        backgroundColor: 'rgba(255,35,35,0.9)'
    },500);
};

var blueMode = false;

$(window).scroll(function(){

    var pos = $('.page2').position().top;
    if ($(window).scrollTop() + 60 >  pos) {
        if (!blueMode) {
            blueFunc();
            $('.header-container').removeClass('header-container-hover-red');
            $('.header-container').addClass('header-container-hover-blue');
            blueMode = true;
        }
    } else {
        if (blueMode) {
            redFunc();
            $('.header-container').removeClass('header-container-hover-blue');
            $('.header-container').addClass('header-container-hover-red');
            blueMode = false;
        }
    }
});