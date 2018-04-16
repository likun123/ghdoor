// JavaScript Document
$(document).ready(function(){
	
   $('.mumen_sec_con').height($(window).height()-90);   
   
   $(window).resize(function(){
       
	   $('.mumen_sec_con').height($(window).height()-90);  
	    
	   })
	
})




/*******banner**********/
$(document).ready(function(){
  
  var pH=$(window).height();  
  if($(window).width()>991){
	  $('.banner_inner').height($(window).height());
      $('.inner_sec1').css("margin-top",pH*0.7);
	  }else{
		  $('.banner_inner').height($(window).height()*0.7);
          $('.inner_sec1').css("margin-top",pH*0.5);
		  }		
		  
   $(window).resize(function(){
       var pH=$(window).height();  
       if($(window).width()>991){
	      $('.banner_inner').height($(window).height());
          $('.inner_sec1').css("margin-top",pH*0.7);
	      }else{
		    $('.banner_inner').height($(window).height()*0.7);
            $('.inner_sec1').css("margin-top",pH*0.5);
		  }
	   })
})
/*******banner**********/






/*****huandong*****/
$(document).ready(function(){

$('.mumen_sec_con1').addClass('bg_on1');
setTimeout(function(){
   $('.mumen_sec_con1').addClass('bg_on2');
   },400);
$('.mumen_sec_con1').find('.mumen_sec_con_zi').delay(400).animate({top:"0",opacity:"1"},1000);	     
$('.mumen_sec_con1').find('.mumen_sec_con_img').delay(700).animate({top:"0",opacity:"1"},1000);

$(window).scroll(function(){
  
  if($(window).scrollTop()>100){
	  $('.header2').stop(true).animate({top:"0"},600);
	  }else{
		  $('.header2').stop(true).animate({top:"-90px"},600);
		  }
  
  if($(window).scrollTop()>($('.mumen_sec_con2').offset().top-600)){  
      $('.mumen_sec_con2').addClass('bg_on1');
	  setTimeout(function(){
		  $('.mumen_sec_con2').addClass('bg_on2');
		  },400);
	  $('.mumen_sec_con2').find('.mumen_sec_con_zi').delay(400).animate({top:"0",opacity:"1"},1000);	  
	  $('.mumen_sec_con2').find('.mumen_sec_con_img').delay(700).animate({top:"0",opacity:"1"},1000); 	  
      } 
  
  if($(window).scrollTop()>($('.mumen_sec_con3').offset().top-600)){  
      $('.mumen_sec_con3').addClass('bg_on1');
	  setTimeout(function(){
		  $('.mumen_sec_con3').addClass('bg_on2');
		  },400);
	  $('.mumen_sec_con3').find('.mumen_sec_con_zi').delay(400).animate({top:"0",opacity:"1"},1000);	   	  
	  $('.mumen_sec_con3').find('.mumen_sec_con_img').delay(700).animate({top:"0",opacity:"1"},1000); 	  
      }
	  
  if($(window).scrollTop()>($('.mumen_sec_con4').offset().top-600)){  
      $('.mumen_sec_con4').addClass('bg_on1');
	  setTimeout(function(){
		  $('.mumen_sec_con4').addClass('bg_on2');
		  },400);
	  $('.mumen_sec_con4').find('.mumen_sec_con_zi').delay(400).animate({top:"0",opacity:"1"},1000);	   	  
	  $('.mumen_sec_con4').find('.mumen_sec_con_img').delay(700).animate({top:"0",opacity:"1"},1000); 	  
      }	  	  
    	  
  
  	     	   	
}) 	
})
/*****huandong*****/


