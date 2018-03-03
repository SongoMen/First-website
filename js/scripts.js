setTimeout(function() {
    $('#loading').delay(1200).fadeOut('slow');
}, 1000);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;