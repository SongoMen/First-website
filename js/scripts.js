jQuery(document).ready(function(){
  jQuery('#dalej').on('click', function(event) {
    if($('#home').is(':visible')) {        
       jQuery('#home').toggle('hide');
       jQuery('#article2').toggle('show');
    }
    
       $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });
});

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

if(month<10){
    month = "0" + month
}

if(day<10){
    day = "0" + day
}

today = day + '/' + month + '/' + year;
