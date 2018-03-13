
jQuery(document).ready(function(){
  
  jQuery('#dalej').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#home').delay(800).toggle('hide');
    jQuery('#article2').delay(800).toggle('show');
    jQuery('#opt1').toggle('hide');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt2").animate({width: 100}, 800 );
    jQuery('#opt2').addClass('isActive');
    $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });

  jQuery('#dalej2').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article2').delay(1000).toggle('hide');
    jQuery('#article3').delay(1000).toggle('show');
    jQuery('#opt2').toggle('isActive');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt3").animate({width: 100}, 800 );
    jQuery('#opt3').addClass('isActive');
    $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });

  jQuery('#dalej3').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article3').delay(800).toggle('hide');
    jQuery('#article4').delay(800).toggle('show');
    jQuery('#opt3').toggle('isActive');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt4").animate({width: 100}, 800 );
    jQuery('#opt4').addClass('isActive');
    $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });

  jQuery('#dalej4').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article4').delay(800).toggle('hide');
    jQuery('#article5').delay(800).toggle('show');
    jQuery('#opt4').toggle('isActive');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt5").animate({width: 100}, 800 );
    jQuery('#opt5').addClass('isActive');
    $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });

  jQuery('#dalej5').on('click', function(event) {
    jQuery('#article5').toggle('hide');
    jQuery('#home').toggle('show');
    jQuery('#opt1').toggle('show');
    jQuery('#opt5').toggle('isActive');
    $("#opt1").animate({width: 100}, 800 );
    jQuery('#opt1').addClass('isActive');
    $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
  });

  if($('#home').is(':visible')) {   
    $("#opt1").animate({width: 100}, 800 );
    jQuery('#opt1').addClass('isActive');
  }

  jQuery('#move2').on('click', function(event) {
    if($('#dalej').is(':visible')){
      jQuery('#home').toggle('hide');
      jQuery('#article2').toggle('show');
      jQuery('#opt1').toggle('isActive');
      $("#opt2").animate({width: 100}, 800 );
      jQuery('#opt2').addClass('isActive');
      $("#trans").animate( { "opacity": "show", top:"100"} , 500 );
    }   
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
