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

$('.ab_sec1_con2>h5').animate({top:"0",opacity:"1"},1000);
$('.ab_sec1_con2>span').delay(300).animate({top:"0",opacity:"1"},1000);
$('.ab_sec1_con2>p').delay(600).animate({top:"0",opacity:"1"},1000);

$(window).scroll(function(){
  
  if($(window).scrollTop()>100){
	  $('.header2').stop(true).animate({top:"0"},600);
	  }else{
		  $('.header2').stop(true).animate({top:"-90px"},600);
		  }
  
  if($(window).scrollTop()>($('.ab_sec1_con3').offset().top-600)){  
      $('.ab_sec1_con3_img').animate({left:"0",opacity:"1"},1000);
	  $('.ab_sec1_con3_zi').delay(300).animate({right:"0",opacity:"1"},1000);
      }
  
  if($(window).scrollTop()>($('.ab_sec2_con').offset().top-600)){
	  $('.ab_sec2_con>h5').animate({top:"0",opacity:"1"},1000);
	  $('.ab_sec2_con>span').delay(300).animate({top:"0",opacity:"1"},1000);
	  $('.ab_sec2_con>p').delay(600).animate({top:"0",opacity:"1"},1000);
	  $('.ab_sec2_con1').delay(900).animate({top:"0",opacity:"1"},1000);
	  }
  
  if($(window).scrollTop()>($('.ab_sec2_con2').offset().top-600)){
	  $('.ab_sec2_con2_list>h5').animate({top:"0",opacity:"1"},1000);
	  $('.ab_sec2_con2_list>span').animate({top:"0",opacity:"1"},1000);
	  $('.ab_sec2_con2_list>p').animate({top:"0",opacity:"1"},1000);
	  $('.ab_sec2_next').animate({top:"15px",opacity:"1"},1000);
	  $('.ab_sec2_prev').animate({top:"15px",opacity:"1"},1000);
	  $('.ab_sec2_con2s1').delay(300).animate({left:"0",opacity:"1"},1000);
	  $('.ab_sec2_con2s2').delay(600).animate({right:"0",opacity:"1"},1000);
	  }	  	  
  
  	     	   	
}) 	
})
/*****huandong*****/


/*******ab_sec2**********/ 
$(document).ready(function(){
  
  var sp=$('.ab_sec2_con1>span').width()/2;
  $('.ab2_line').stop(true).animate({width:sp},300);
  var s=$('.ab_sec2_con1>span').size();
  
  $('.ab_sec2_con1>span').click(function(){
	  n=$(this).index()-1;
	  abS1();
	  })
	  
  var n=0; 
  function abS1(){
	  if(n>(s-2)){
		  n=0;
		  $('.ab2_line').stop(true).animate({width:(1+2*n)*sp},300);
	      $('.ab_sec2_con1>span').removeClass('ab2_on');
	      $('.ab_sec2_con1>span').eq(n).addClass('ab2_on');
		  $('.ab_sec2_con2_list').stop(true).fadeOut(0);
		  $('.ab_sec2_con2_list').eq(n).stop(true).fadeIn(600);
		  }else{
			  n++;
			  $('.ab2_line').stop(true).animate({width:(1+2*n)*sp},300);
	          $('.ab_sec2_con1>span').removeClass('ab2_on');
	          $('.ab_sec2_con1>span').eq(n).addClass('ab2_on');
			  $('.ab_sec2_con2_list').stop(true).fadeOut(0);
		      $('.ab_sec2_con2_list').eq(n).stop(true).fadeIn(600);
			  }
	  }
  
  function abS2(){
	  if(n<1){
		  n=s-1;
		  $('.ab2_line').stop(true).animate({width:(1+2*n)*sp},300);
	      $('.ab_sec2_con1>span').removeClass('ab2_on');
	      $('.ab_sec2_con1>span').eq(n).addClass('ab2_on');
		  $('.ab_sec2_con2_list').stop(true).fadeOut(0);
		  $('.ab_sec2_con2_list').eq(n).stop(true).fadeIn(600); 
		  }else{
			  n--;
			  $('.ab2_line').stop(true).animate({width:(1+2*n)*sp},300);
	          $('.ab_sec2_con1>span').removeClass('ab2_on');
	          $('.ab_sec2_con1>span').eq(n).addClass('ab2_on');
			  $('.ab_sec2_con2_list').stop(true).fadeOut(0);
		      $('.ab_sec2_con2_list').eq(n).stop(true).fadeIn(600);
			  }
	  }	 
  
  $('.ab_sec2_next').click(function(){
	  abS1();
	  })
  $('.ab_sec2_prev').click(function(){
	  abS2();
	  })	  	      	
      
}); 
/*******ab_sec2**********/ 



/*huadong*/
	
$(document).ready(function(){


$(window).scroll(function(){

  
  
  if($(window).scrollTop()>($('.ab_sec1').offset().top-600)){
	  $('.news_top').animate({top:"0",opacity:"1"},1000);
	  $('.news_center').eq(0).delay(300).animate({right:"0",opacity:"1"},1000);
	  $('.news_center').eq(1).delay(600).animate({right:"0",opacity:"1"},1000);
	  $('.news_center').eq(2).delay(900).animate({right:"0",opacity:"1"},1000);
	  $('.news_bottom').delay(1200).animate({top:"0",opacity:"1"},1000);
	  }	    
  	     	   	
}) 	
})