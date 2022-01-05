$(document).ready(function(){
   $('div.mydiv').on('mousemove',function(e){
          var x = e.pageX - this.offsetLeft;
         

            
            $('div.left-eye').css({'left': x/60}); 
            $('div.left-eye').css({'top': x/70}); 
            $('div.left-eye').css({'right': x/100}); 
            $('div.left-eye').css({'bottom': x/100}); 

        
    });
  });
$(document).ready(function(){
  $('div.mydiv').on('mousemove',function(e){
         var x = e.pageX - this.offsetLeft;
        

           $('div.right-eye').css({'top': x/70}); 
           $('div.right-eye').css({'left': x/60}); 

          
       
   });
 });