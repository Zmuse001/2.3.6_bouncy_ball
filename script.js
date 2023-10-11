$(document).ready(function(){

    $("#ball").click(function(){
        $(this).animate({"top": "-400px"}, "slow", function() {$(this).animate({"top": "400px"}, "slow")})
  }); 
       

});