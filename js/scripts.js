setTimeout(function() {
    $('#loading').delay(1200).fadeOut('slow');
}, 1000);

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('header').addClass("black");
        } else {
            header.removeClass("black").addClass('header');
        }
    });
});