setTimeout(function() {
    $('#loading').delay(1200).fadeOut('slow');
}, 1000);

window.onscroll = function() {menuheader()};

function menuheader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName(".header").className = "bar";
    } else {
        document.getElementsByClassName(".header").className = "";
    }
}

