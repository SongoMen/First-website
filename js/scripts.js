setTimeout(function() {
    $('#loading').delay(1200).fadeOut('slow');
}, 1000);

function today(){
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1; //January is 0!
var year = today.getFullYear();

if(month>10){
    month = "0" + month
}

today = day + '/' + month + '/' + year;
}