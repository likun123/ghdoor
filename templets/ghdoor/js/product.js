// JavaScript Document
$(document).ready(function(){
	
   $('.prod_box').height($(window).height()-90);   
   
   $(window).resize(function(){
       $('.prod_box').height($(window).height()-90);    
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






$(document).ready(function(){

$('.prod1_top').animate({top:"0",opacity:"1"},2000);

$(window).scroll(function(){
	
	if($(window).scrollTop()>100){
	  $('.header2').stop(true).animate({top:"0"},600);
	  }else{
		  $('.header2').stop(true).animate({top:"-90px"},600);
		  }
if($(window).scrollTop()>($('.prod1_top_wenzi').offset().top-800)){
    
		$('.prod1_top_wenzi').animate({top:"0",opacity:"1"},1000);

	}
	
if($(window).scrollTop()>($('.porod1_b2_font').offset().top-600)){
   
		$('.text1').animate({right:"0",opacity:"1"},1000);
		$('.img1').animate({right:"0",opacity:"1"},1000);

	}

if($(window).scrollTop()>($('.porod1_b2_font1').offset().top-600)){
		$('.text2').animate({right:"0",opacity:"1"},1000);
		$('.img2').animate({right:"0",opacity:"1"},1000);
	}	
if($(window).scrollTop()>($('.text3').offset().top-600)){
   
		$('.text3').animate({right:"0",opacity:"1"},1000);
		$('.img3').animate({right:"0",opacity:"1"},1000);

	}

if($(window).scrollTop()>($('.text4').offset().top-600)){
		$('.text4').animate({right:"0",opacity:"1"},1500);
		$('.img4').animate({right:"0",opacity:"1"},1500);
	}	
if($(window).scrollTop()>($('.text5').offset().top-600)){
   
		$('.text5').animate({right:"0",opacity:"1"},1500);
		$('.img5').animate({right:"0",opacity:"1"},1500);

	}
if($(window).scrollTop()>($('.top2').offset().top-800)){
    
		$('.top2').animate({top:"0",opacity:"1"},1000);

	}
if($(window).scrollTop()>($('.k1').offset().top-600)){
    
		$('.k1').animate({top:"0",opacity:"1"},1000);

	}
if($(window).scrollTop()>($('.k2').offset().top-600)){
    
		$('.k2').animate({top:"0",opacity:"1"},1000);

	}
			



})

})


/*********缓动**********/
	
	