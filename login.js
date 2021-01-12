$(document).ready(function(){
    $("#btnlogin").click(function(){
        $("#btnlogin").css("background-color","blue");
        $("#btninscri").css("background-color","#218838");
        $("#connecter").show();
       $("#inscription").slideUp();
       
       $("#connecter").mouseenter(function(){
        $("#btnlogin").css("background-color","blue");   
        $("#btnlogin").animate({      
      height: '+=10px',
      width: '+=10px'
         });
     });
     $("#connecter").mouseleave(function(){
        $("#btnlogin").css("background-color","blue"); 
        $("#btnlogin").animate({      
      height: '-=10px',
      width: '-=10px'
         });
     });
    });
});

$(document).ready(function(){
    $("#btninscri").click(function(){
        $("#btninscri").css("background-color","blue");
        $("#btnlogin").css("background-color","#138496");
       $("#inscription").slideDown();
       $("#connecter").slideDown();
       $("#connecter").hide();
       
    });
    $("#inscription").mouseenter(function(){
        $("#btninscri").css("background-color","blue");   
        $("#btninscri").animate({      
      height: '+=10px',
      width: '+=10px'
         });
     });
     $("#inscription").mouseleave(function(){
        $("#btninscri").css("background-color","blue"); 
        $("#btninscri").animate({      
      height: '-=10px',
      width: '-=10px'
         });
     });
});