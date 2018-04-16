// JavaScript Document
$(document).ready(function(){
	   
   
    $(window).resize(function(){
 
        })
     
 })
 
 
 
 $(window).load(function(){
    
    $('a').click(function(){
            var a=$(this).attr("href").split("#")[1];
            var p=$("#"+a).offset().top-90;
            $("html,body").animate({scrollTop:p},1000);
        })
    
    $('.foot-word').click(function(){
        $("html,body").animate({scrollTop:0},1000);
        })
            
         
 $('.nav_btn').click(function(){
         
         $('.nav').height($(window).height())
         
         if($('.nav').css("display")=="none"){
             $('.sp1').addClass('sp1on');
             $('.sp2').addClass('sp2on');
             $('.sp3').addClass('sp3on');
             $('.nav').stop(true).fadeIn(600);
             $('.nav_l>ul>li').addClass('nali');
             $('body').addClass('body_on');
             }else{
                 $('.sp1').removeClass('sp1on');
                 $('.sp2').removeClass('sp2on');
                 $('.sp3').removeClass('sp3on');
                 $('.nav').stop(true).fadeOut(600);
                 $('.nav_l>ul>li').removeClass('nali');
                 $('body').removeClass('body_on');
                 }
         })	
     
 $('.nav_btns2').click(function(){
         
         $('.nav').height($(window).height())
         
         if($('.nav').css("display")=="none"){
             $('.sp1').addClass('sp1on');
             $('.sp2').addClass('sp2on');
             $('.sp3').addClass('sp3on');
             $('.nav').stop(true).fadeIn(600);
             $('.nav_l>ul>li').addClass('nali');
             $('body').addClass('body_on');
             }else{
                 $('.sp1').removeClass('sp1on');
                 $('.sp2').removeClass('sp2on');
                 $('.sp3').removeClass('sp3on');
                 $('.nav').stop(true).fadeOut(600);
                 $('.nav_l>ul>li').removeClass('nali');
                 $('body').removeClass('body_on');
                 }
         })		
             
     
 })
 
 
 $(window).load(function(){
     $('.pro_r_top').height($('.pro_l').height()/2);
     $('.pro_r_bot').height($('.pro_l').height()/2);
     })
     
     
     
     
     
     
     
 $(function(){
     $('.bg_img').hover(
             function(){
                 $(this).find('.hover-box').stop(true,false).animate({top:0+'%',width:100+'%',left:0})
                 $(this).find('.heng').stop(true,false).animate({width:100+'%',top:50+'%',left:0+'%'})
                 $(this).find('.shu').stop(true,false).animate({height:100+'%',top:0+'%',left:50+'%'})
 
             },
             function(){
                 $(this).find('.hover-box').stop(true,false).animate({top:0+'%',width:0+'%',left:100+'%'},function(){
                     $('.hover-box').css("left",0)
                     })
                 $(this).find('.heng').stop(true,false).animate({width:0,top:50+'%',left:0+'%'})
                 $(this).find('.shu').stop(true,false).animate({height:0,top:0+'%',left:50+'%'})
                 
                
             }
     )
 
 })
 
 
 
 
 
 
 
 $(function(){
 
    $('.nav_btn2').click(function(){
       $('.phone_nav').height($(window).height());  
       $('.phone_nav').stop(true).animate({top:"0",opacity:"1","z-index":"999999"},600,function(){
           $('.phone_nav').css("position","fixed")
           })
       $('.nav_btn3').stop(true).delay(300).animate({top:"15px",opacity:"1"},600)   
    })
    $('.nav_btn3').click(function(){
       $('.phone_nav').stop(true).animate({top:"80px",opacity:"0","z-index":"-1"},600,function(){
          $('.phone_nav').css("position","absolute") 
           $('.phone_nav').height(0); 
          })
       $('.nav_btn3').stop(true).animate({top:"90px",opacity:"0"},600)   
    })
       
    $('.phone_nav>ul>li').click(function(){
        if($(this).find('ul').css("display")=="none"){
            $('.phone_nav>ul>li').find('ul').stop(true).slideUp(300);
            $(this).find('ul').stop(true).slideDown(300);
            }else{
                $('.phone_nav>ul>li').find('ul').stop(true).slideUp(300);
                $(this).find('ul').stop(true).slideUp(300);
                }
        })	  
        
 })
 
 
 $(document).ready(function(){
 
   $('.zxdl_con').height($(window).height());
 
   
   $('.search1').click(function(){
       $('.zxdl_con').stop(true).fadeIn(600);
       var zz=$('.zxdl_cons').height();
   $('.zxdl_cons').css("margin-top",-zz/2);
       })
       
 $('.search21').click(function(){
       $('.zxdl_con').stop(true).fadeIn(600);
       var zz=$('.zxdl_cons').height();
   $('.zxdl_cons').css("margin-top",-zz/2);
       })	  
       
   
   $('.zxdl_cons>h5 span').click(function(){
       $('.zxdl_con').stop(true).fadeOut(600);
       })
   
   $('.zxdl_tu').click(function(){
       if($(this).parent().find('ul').css("display")=="none"){
           $('.zxdl ul').stop(true).slideDown(600);
           }else{
               $('.zxdl ul').stop(true).slideUp(600);
               }
       })
       
 })
 
 
 
 
 
 
 
 
 
 
 
 