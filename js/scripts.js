
jQuery(document).ready(function(){
  
  jQuery('#dalej').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#home').delay(800).toggle('hide');
    jQuery('#article2').delay(800).toggle('show');
    jQuery('#opt1').toggle();
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt2").animate({width: 100}, 800 );
    if($('#opt2').hasClass('isActive')){
      jQuery('#opt2').toggle();
    }
    else{
      jQuery('#opt2').addClass('isActive');
    }
    $("#opt2").animate({width: 100}, 800 );
  });

  jQuery('#dalej2').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article2').delay(1000).toggle('hide');
    jQuery('#article3').delay(900).toggle('show');
    jQuery('#opt2').toggle('isActive');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt3").animate({width: 100}, 800 );
    if($('#opt3').hasClass('isActive')){
      jQuery('#opt3').toggle();
    }
    else{
      jQuery('#opt3').addClass('isActive');
    }
    $("#opt3").animate({width: 100}, 800 );
  });

  jQuery('#dalej3').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article3').delay(1000).toggle('hide');
    jQuery('#article4').delay(900).toggle('show');
    jQuery('#opt3').toggle('isActive');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt4").animate({width: 100}, 800 );
    if($('#opt4').hasClass('isActive')){
      jQuery('#opt4').toggle();
    }
    else{
      jQuery('#opt4').addClass('isActive');
    }
    $("#opt4").animate({width: 100}, 800 );
     
  });

  jQuery('#dalej4').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article4').delay(1000).toggle('hide');
    jQuery('#article5').delay(900).toggle('show');
    jQuery('#opt4').toggle('isActive');
    jQuery('#page-trans').delay(1200).toggle('hide');
    $("#opt5").animate({width: 100}, 800 );
    if($('#opt5').hasClass('isActive')){
      jQuery('#opt5').toggle();
    }
    else{
      jQuery('#opt5').addClass('isActive');
    }
    $("#opt5").animate({width: 100}, 800 );
     
     
  });

  jQuery('#dalej5').on('click', function(event) {
    jQuery('#page-trans').toggle('show');
    jQuery('#article5').delay(900).toggle('hide');
    jQuery('#home').delay(900).toggle('show');
    jQuery('#opt1').toggle('show');
    jQuery('#page-trans').delay(1200).toggle('hide');
    jQuery('#opt5').toggle('isActive');
    $("#opt1").animate({width: 100}, 800 );

  });

  if($('#home').is(':visible')) {   
    $("#opt1").animate({width: 100}, 800 );
    jQuery('#opt1').addClass('isActive');
  }

  jQuery('#move1, #move6').on('click', function(event) {
    if($('#article2').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article2').delay(800).toggle('hide');
      jQuery('#home').delay(800).toggle('show');
      jQuery('#opt2').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      $("#opt1").animate({width: 100}, 800 );
      if($('#opt1').hasClass('isActive')){
        jQuery('#opt1').toggle();
      }
      else{
        jQuery('#opt1').addClass('isActive');
      }
      $("#opt1").animate({width: 100}, 800 );
    } 
    if($('#article3').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article3').delay(800).toggle('hide');
      jQuery('#home').delay(800).toggle('show');
      jQuery('#opt3').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt1').hasClass('isActive')){
        jQuery('#opt1').toggle();
      }
      else{
        jQuery('#opt1').addClass('isActive');
      }
      $("#opt1").animate({width: 100}, 800 );
       
    }
    if($('#article4').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article4').delay(800).toggle('hide');
      jQuery('#home').delay(800).toggle('show');
      jQuery('#opt4').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt1').hasClass('isActive')){
        jQuery('#opt1').toggle();
      }
      else{
        jQuery('#opt1').addClass('isActive');
      }
      $("#opt1").animate({width: 100}, 800 );
       
    }       
    if($('#article5').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article5').delay(800).toggle('hide');
      jQuery('#home').delay(800).toggle('show');
      jQuery('#opt5').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt1').hasClass('isActive')){
        jQuery('#opt1').toggle();
      }
      else{
        jQuery('#opt1').addClass('isActive');
      }
      $("#opt1").animate({width: 100}, 800 );
       
    }     
  });

  jQuery('#move2, #move7').on('click', function(event) {
    if($('#home').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#home').delay(800).toggle('hide');
      jQuery('#article2').delay(800).toggle('show');
      jQuery('#opt1').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt2').hasClass('isActive')){
        jQuery('#opt2').toggle();
      }
      else{
        jQuery('#opt2').addClass('isActive');
      }
      $("#opt2").animate({width: 100}, 800 );
       
    } 
    if($('#article3').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article3').delay(800).toggle('hide');
      jQuery('#article2').delay(800).toggle('show');
      jQuery('#opt3').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt2').hasClass('isActive')){
        jQuery('#opt2').toggle();
      }
      else{
        jQuery('#opt2').addClass('isActive');
      }
      $("#opt2").animate({width: 100}, 800 );
       
    }
    if($('#article4').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article4').delay(800).toggle('hide');
      jQuery('#article2').delay(800).toggle('show');
      jQuery('#opt4').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt2').hasClass('isActive')){
        jQuery('#opt2').toggle();
      }
      else{
        jQuery('#opt2').addClass('isActive');
      }
      $("#opt2").animate({width: 100}, 800 );
       
    }       
    if($('#article5').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article5').delay(800).toggle('hide');
      jQuery('#article2').delay(800).toggle('show');
      jQuery('#opt5').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt2').hasClass('isActive')){
        jQuery('#opt2').toggle();
      }
      else{
        jQuery('#opt2').addClass('isActive');
      }
      $("#opt2").animate({width: 100}, 800 );
       
    }     
  });

  jQuery('#move3, #move8').on('click', function(event) {
    if($('#home').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#home').delay(800).toggle('hide');
      jQuery('#article3').delay(800).toggle('show');
      jQuery('#opt1').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt3').hasClass('isActive')){
        jQuery('#opt3').toggle();
      }
      else{
        jQuery('#opt3').addClass('isActive');
      }
      $("#opt3").animate({width: 100}, 800 );
       
    } 
    if($('#article2').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article2').delay(800).toggle('hide');
      jQuery('#article3').delay(800).toggle('show');
      jQuery('#opt2').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt3').hasClass('isActive')){
        jQuery('#opt3').toggle();
      }
      else{
        jQuery('#opt3').addClass('isActive');
      }
      $("#opt3").animate({width: 100}, 800 );
       
    }
    if($('#article4').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article4').delay(800).toggle('hide');
      jQuery('#article3').delay(800).toggle('show');
      jQuery('#opt4').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt3').hasClass('isActive')){
        jQuery('#opt3').toggle();
      }
      else{
        jQuery('#opt3').addClass('isActive');
      }
      $("#opt3").animate({width: 100}, 800 );
       
    }       
    if($('#article5').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article5').delay(800).toggle('hide');
      jQuery('#article3').delay(800).toggle('show');
      jQuery('#opt5').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt3').hasClass('isActive')){
        jQuery('#opt3').toggle();
      }
      else{
        jQuery('#opt3').addClass('isActive');
      }
      $("#opt3").animate({width: 100}, 800 );
       
    }     
  });

  jQuery('#move4, #move9').on('click', function(event) {
    if($('#home').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#home').delay(800).toggle('hide');
      jQuery('#article4').delay(800).toggle('show');
      jQuery('#opt1').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt4').hasClass('isActive')){
        jQuery('#opt4').toggle();
      }
      else{
        jQuery('#opt4').addClass('isActive');
      }
      $("#opt4").animate({width: 100}, 800 );
       
    } 
    if($('#article2').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article2').delay(800).toggle('hide');
      jQuery('#article4').delay(800).toggle('show');
      jQuery('#opt2').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt4').hasClass('isActive')){
        jQuery('#opt4').toggle();
      }
      else{
        jQuery('#opt4').addClass('isActive');
      }
      $("#opt4").animate({width: 100}, 800 );
       
    }
    if($('#article3').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article3').delay(800).toggle('hide');
      jQuery('#article4').delay(800).toggle('show');
      jQuery('#opt3').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt4').hasClass('isActive')){
        jQuery('#opt4').toggle();
      }
      else{
        jQuery('#opt4').addClass('isActive');
      }
      $("#opt4").animate({width: 100}, 800 );
       
    }       
    if($('#article5').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article5').delay(800).toggle('hide');
      jQuery('#article4').delay(800).toggle('show');
      jQuery('#opt5').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt4').hasClass('isActive')){
        jQuery('#opt4').toggle();
      }
      else{
        jQuery('#opt4').addClass('isActive');
      }
      $("#opt4").animate({width: 100}, 800 );
       
    }     
  });

  jQuery('#move5, #move10').on('click', function(event) {
    if($('#home').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#home').delay(800).toggle('hide');
      jQuery('#article5').delay(800).toggle('show');
      jQuery('#opt1').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt5').hasClass('isActive')){
        jQuery('#opt5').toggle();
      }
      else{
        jQuery('#opt5').addClass('isActive');
      }
      $("#opt5").animate({width: 100}, 800 );
       
    } 
    if($('#article2').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article2').delay(800).toggle('hide');
      jQuery('#article5').delay(800).toggle('show');
      jQuery('#opt2').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt5').hasClass('isActive')){
        jQuery('#opt5').toggle();
      }
      else{
        jQuery('#opt5').addClass('isActive');
      }
      $("#opt5").animate({width: 100}, 800 );
       
    }
    if($('#article3').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article3').delay(800).toggle('hide');
      jQuery('#article5').delay(800).toggle('show');
      jQuery('#opt3').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt5').hasClass('isActive')){
        jQuery('#opt5').toggle();
      }
      else{
        jQuery('#opt5').addClass('isActive');
      }
      $("#opt5").animate({width: 100}, 800 );
       
    }       
    if($('#article4').is(':visible')){
      jQuery('#page-trans').toggle('show');
      jQuery('#article4').delay(800).toggle('hide');
      jQuery('#article5').delay(800).toggle('show');
      jQuery('#opt4').toggle('isActive');
      jQuery('#page-trans').delay(1200).toggle('hide');
      if($('#opt5').hasClass('isActive')){
        jQuery('#opt5').toggle();
      }
      else{
        jQuery('#opt5').addClass('isActive');
      }
      $("#opt5").animate({width: 100}, 800 );
       
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
