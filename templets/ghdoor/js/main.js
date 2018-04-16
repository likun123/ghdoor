// JavaScript Document
$(document).ready(function(){
	
      
   
    $(window).resize(function(){
         
        })
     
 })
 
 
 
 
 /*******banner**********/
 $(document).ready(function(){
   var pH=$(window).height();  
   if($(window).width()>991){
       $('.banner').height($(window).height());
       $('.sec1').css("margin-top",pH);
       }else{
           $('.banner').height($(window).height()*0.7);
           $('.sec1').css("margin-top",pH*0.7);
           }		
           
    $(window).resize(function(){
        var pH=$(window).height();  
        if($(window).width()>991){
           $('.banner').height($(window).height());
           $('.sec1').css("margin-top",pH);
           }else{
             $('.banner').height($(window).height()*0.7);
             $('.sec1').css("margin-top",pH*0.7);
           }
        })
   
   var n=0;
   var play=0;
   banner();
   function banner(){
       if(n==0){
           $('.banner_list>li').stop(true).fadeOut(600);
           $('.banner_list>li').eq(n).stop(true).fadeIn(1200);
           $('.banner_bon>ul>li').removeClass('ban_bon');
           $('.banner_bon>ul>li').eq(n).addClass('ban_bon');
 
           $('.banner_bon>ul>li').find('.banner_lines').stop(true).animate({width:"0"},0 ,'linear',function(){});
           setTimeout(function(){
               $('.banner_bon>ul>li').eq(0).find('.banner_lines').stop(true).animate({width:"100%"},4000 ,'linear');
               },1) 
                 
           n=1;
           return;
           }
       if(n==1){
           $('.banner_list>li').stop(true).fadeOut(600);
           $('.banner_list>li').eq(n).stop(true).fadeIn(1200);
           $('.banner_bon>ul>li').removeClass('ban_bon');
           $('.banner_bon>ul>li').eq(n).addClass('ban_bon');
           
           $('.banner_bon>ul>li').find('.banner_lines').stop(true).animate({width:"0"},0 ,'linear',function(){});
           $('.banner_bon>ul>li').eq(0).find('.banner_lines').stop(true).animate({width:"100%"},0 ,'linear');
           setTimeout(function(){
               $('.banner_bon>ul>li').eq(1).find('.banner_lines').stop(true).animate({width:"100%"},4000 ,'linear');
               },1)
               
           n=2;  
           return;
           }
       if(n==2){
           $('.banner_list>li').stop(true).fadeOut(600);
           $('.banner_list>li').eq(n).stop(true).fadeIn(1200);
           $('.banner_bon>ul>li').removeClass('ban_bon');
           $('.banner_bon>ul>li').eq(n).addClass('ban_bon');
           
           $('.banner_bon>ul>li').find('.banner_lines').stop(true).animate({width:"0"},0 ,'linear');
           $('.banner_bon>ul>li').eq(0).find('.banner_lines').stop(true).animate({width:"100%"},0 ,'linear');
           $('.banner_bon>ul>li').eq(1).find('.banner_lines').stop(true).animate({width:"100%"},0 ,'linear');
           setTimeout(function(){
               $('.banner_bon>ul>li').eq(2).find('.banner_lines').stop(true).animate({width:"100%"},4000 ,'linear');
               },1)	  
               
           n=3;
           return;
           }
       if(n==3){
           $('.banner_list>li').stop(true).fadeOut(600);
           $('.banner_list>li').eq(n).stop(true).fadeIn(1200);
           $('.banner_bon>ul>li').removeClass('ban_bon');
           $('.banner_bon>ul>li').eq(n).addClass('ban_bon');
           $('.banner_bon>ul>li').find('.banner_lines').stop(true).animate({width:"0"},0 ,'linear');
           $('.banner_bon>ul>li').eq(0).find('.banner_lines').stop(true).animate({width:"100%"},0 ,'linear');
           $('.banner_bon>ul>li').eq(1).find('.banner_lines').stop(true).animate({width:"100%"},0 ,'linear');
           $('.banner_bon>ul>li').eq(2).find('.banner_lines').stop(true).animate({width:"100%"},0 ,'linear');	  
           setTimeout(function(){
               $('.banner_bon>ul>li').eq(3).find('.banner_lines').stop(true).animate({width:"100%"},4000 ,'linear');
               },1)	  
               
           n=0;
           return;
           }	  	  	  
       }
   
   $('.banner_bon>ul>li').click(function(){
       n=$(this).index();
       banner();
       clearInterval(play);
       lunbo(); 
       })
    
   function lunbo(){
       play=setInterval(function(){
           banner();
           },4000);
       }    
   
   lunbo();
   
   
   
   if($(window).width()<768){
 var isdrag=false;   
 var tx,x,ty,y;    
 
     document.getElementById("phone").addEventListener('touchend',function(){  
         isdrag = false; 
     });  
     document.getElementById("phone").addEventListener('touchstart',touchStart);  
     document.getElementById("phone").addEventListener('touchmove',touchMove);  
      
 function touchMove(e){
   if (isdrag){
       e.preventDefault(); 
     var nn = tx + e.touches[0].pageX - x;
     var mm = ty + e.touches[0].pageY - y;
     
     if(Math.abs(mm)>1){
          var s=$('body').scrollTop();
          $('body').stop().animate({ scrollTop: s-mm },0);
         }
     
     if(Math.abs(nn)>50){
         if(nn<0){
             banner();
             isdrag = false;
             return; 
             }else{
                 banner();
                 isdrag = false;
                 return;
                 }
         }
     
     
                 
    }   
 }   
  
 function touchStart(e){   
    isdrag = true;  
    tx = parseInt(document.getElementById("phone").style.left+0);
    ty = parseInt(document.getElementById("wap").style.top+0);      
    x = e.touches[0].pageX;
    y = e.touches[0].pageY;        
    return false;   
 }
 }
 
 
     
 })
 /*******banner**********/
 
 
 
 
 
 
 /*****huandong*****/
 $(document).ready(function(){
 
 
 $(window).scroll(function(){
   
   if($(window).scrollTop()>100){
       $('.header2').stop(true).animate({top:"0"},600);
       }else{
           $('.header2').stop(true).animate({top:"-90px"},600);
           }
   
   if($(window).scrollTop()>($('.sec1').offset().top-600)){  
       $('.sec1_con>h5').animate({top:"0",opacity:"1"},1000);
       $('.sec1_con>span').animate({top:"0",opacity:"1"},1000);
       $('.sec1_zis1').delay(300).animate({left:"0",opacity:"1"},1000);
       $('.sec1_zis2').delay(300).animate({right:"0",opacity:"1"},1000);
       $('.sec1_img').delay(600).animate({top:"0",opacity:"1"},1000);
       }
   
   if($(window).scrollTop()>($('.sec2').offset().top-600)){
       $('.sec2>h5').animate({top:"0",opacity:"1"},1000);
       $('.sec2>span').animate({top:"0",opacity:"1"},1000);
       }	 
   
   if($(window).scrollTop()>($('.sec3').offset().top-600)){
       $('.sec3_t').animate({top:"0",opacity:"1"},1000);
       $('.sec3_con>span').delay(300).animate({top:"0",opacity:"1"},1000);
       $('.sec3_con>h5').delay(300).animate({top:"0",opacity:"1"},1000); 
       $('.sec3_line>img').addClass('sec3_line_on');
       $('.sec3_zis2').delay(900).animate({top:"0",opacity:"1"},1000);
       $('.sec3_zis1').delay(1200).animate({top:"0",opacity:"1"},1000);
       $('.sec3_zis3').delay(1500).animate({top:"0",opacity:"1"},1000);
       $('.sec3_img').delay(1800).animate({top:"0",opacity:"1"},1000);
       }	 
   
   if($(window).scrollTop()>($('.sec4').offset().top-600)){
       $('.news_top').animate({top:"0",opacity:"1"},1000);
       $('.news_center').eq(0).delay(300).animate({right:"0",opacity:"1"},1000);
       $('.news_center').eq(1).delay(600).animate({right:"0",opacity:"1"},1000);
       $('.news_center').eq(2).delay(900).animate({right:"0",opacity:"1"},1000);
       $('.news_center').eq(3).delay(900).animate({right:"0",opacity:"1"},1000);
       $('.news_bottom').delay(1200).animate({top:"0",opacity:"1"},1000);
       }	    
                       
 }) 	
 })
 /*****huandong*****/
 
 
 /*******main_pro**********/ 
 $(document).ready(function(){
     
   $('.main_pro_con>ul>li').width($('.main_pro_con').width()/3.8);
   var proW=$('.main_pro_con>ul>li').width();
   var proS=$('.main_pro_con>ul>li').size();
   $('.main_pro_con>ul').width(proW*proS+1000);
   
   $(window).resize(function(){
       $('.main_pro_con>ul>li').width($('.main_pro_con').width()/3.8);
       var proW=$('.main_pro_con>ul>li').width();
       var proS=$('.main_pro_con>ul>li').size();
       $('.main_pro_con>ul').width(proW*proS+1000);
       })
   
   /*$('.pro_next').click(function(){
         $('.main_pro_con>ul').stop(true,true).animate({marginLeft:-proW},800,function(){
         $('.main_pro_con>ul').find('li:first-child').appendTo($('.main_pro_con>ul'));
         $('.main_pro_con>ul').css({marginLeft:0})
         })
     })
     $('.pro_prev').click(function(){
         $('.main_pro_con>ul').stop(true,true).animate({marginLeft:-proW},0,function(){
         $('.main_pro_con>ul').find('li:last-child').prependTo($('.main_pro_con>ul'));
         $('.main_pro_con>ul').stop(true,true).animate({marginLeft:0},800)
         })
     })*/
     
    $('.pro_next').click(function(){
        var pm=parseInt($('.main_pro_con>ul').css("left"));
        $('.main_pro_con>ul').stop(true).animate({left:pm-proW},800,function(){
            pro1();
            });
        })
    $('.pro_prev').click(function(){
        var pm=parseInt($('.main_pro_con>ul').css("left"));
        $('.main_pro_con>ul').stop(true).animate({left:pm+proW},800,function(){
            pro2();
            });
        })	   
    
    function pro2(){
        var pm=parseInt($('.main_pro_con>ul').css("left"));
        if(pm>-20){
            $('.pro_prev').stop(true).fadeOut(300);
            $('.pro_next').stop(true).fadeIn(300);
            }else{
                $('.pro_prev').stop(true).fadeIn(300);
                $('.pro_next').stop(true).fadeIn(300);
                }
        }
        
   function pro1(){
        var pm=parseInt($('.main_pro_con>ul').css("left"));
        if(pm<(-(proS-5)*proW)){
            $('.pro_next').stop(true).fadeOut(300);
            $('.pro_prev').stop(true).fadeIn(300);
            }else{
                $('.pro_prev').stop(true).fadeIn(300);
                $('.pro_next').stop(true).fadeIn(300);
                }
        }	   
   
        
       
 }); 
 /*******main_pro**********/ 
 
 
 
 
     
 $(document).ready(function(){
 
     $('.sec2_con').hover(function() {
          $(this).find('.proimg').stop().animate({"opacity":1},800);
          $(this).find('.pimg').stop().animate({"opacity":0},800);
          
     },
     function() {
          $(this).find('.proimg').stop().animate({"opacity":0},800);
          $(this).find('.pimg').stop().animate({"opacity":1},800);
          
     });
     
 })
 
 
     
     
     
     
     