
/* function defenitions */
var animate = function (s) {
    $('html, body').animate({
        scrollTop: $(s).offset().top - 59
    }, 350);
};

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

/* buttons */
$("#button0").click(function() {
    animate(".frontpage");
});
$("#button1").click(function() {
    animate(".page1");
});
$("#button2").click(function() {
    animate(".page2");
});

/* change headerbar color on scroll */
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