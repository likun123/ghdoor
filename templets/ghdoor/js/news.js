// JavaScript Document
$(document).ready(function(){
	
      
   
   $(window).resize(function(){
        
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

$('.ab_sec1').find('.news_top').animate({top:"0",opacity:"1"},1000);

$(window).scroll(function(){
  
 if($(window).scrollTop()>100){
	  $('.header2').stop(true).animate({top:"0"},600);
	  }else{
		  $('.header2').stop(true).animate({top:"-90px"},600);
		  } 
  	
 if($(window).scrollTop()>($('.ab_sec1').offset().top-600)){
	  $('.news_center').eq(0).delay(0).animate({right:"0",opacity:"1"},1000);
	  $('.news_center').eq(1).delay(300).animate({right:"0",opacity:"1"},1000);
	  $('.news_center').eq(2).delay(600).animate({right:"0",opacity:"1"},1000);
	  $('.news_center').eq(3).delay(900).animate({right:"0",opacity:"1"},1000);
	  $('.news_bottom').delay(900).animate({top:"0",opacity:"1"},1000);
	  }	
  
 if($(window).scrollTop()>($('.new_box').offset().top-600)){
	 $('.new_box').find('.news_top').animate({top:"0",opacity:"1"},1000);
	 var new2=$('.new_d').size();
	 for(var i=0; i<new2; i++){
		 $('.new_d').eq(i).delay(300+300*i).animate({top:"0",opacity:"1"},1000);
		 }
	 } 	      

})	  
 	
})
/*****huandong*****/


 




	
	
	
	
	