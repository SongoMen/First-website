jQuery(document).ready(function(){
  jQuery('#dalej').on('click', function(event) {
    if($('#home').is(':visible')) {        
       jQuery('#home').toggle('hide');
       jQuery('#article2').toggle('show');
       jQuery('#opt1').toggle('isActive');
       $("#opt2").animate({width: 100}, 800 );
       jQuery('#opt2').addClass('isActive');
    }  
  $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });
  if($('#home').is(':visible')) {   
    $("#opt1").animate({width: 100}, 800 );
    jQuery('#opt1').addClass('isActive');
  }
  
  if($('#article2').is(':visible')) {   
    $("#opt2").animate({width: 100}, 800 );
    jQuery('#opt2').addClass('isActive');
  }
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
