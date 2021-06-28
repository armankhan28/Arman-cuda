$(document).ready(function(){
    
    // STICKY MENU
    
    $(".js--services-section").waypoint(function(a){"down"==a?$("nav").addClass("sticky"):$("nav").removeClass("sticky")})
    
    
    
    
    
    
     // PROTFOLIO SECTION
    var mixer = mixitup('.container');
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
   document.getElementById("myNav").style.width = "0%"; 
}