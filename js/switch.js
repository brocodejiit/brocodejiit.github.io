$(document).ready(function(){
    $("#contactbtn").click(function(){
        $(".s4").css("display", "table");
        $(".s3").css("display", "none");
        var rcolor = $(".register").css("background");
        var ccolor = $(".contact").css("background");
        $(".contact").css("background", rcolor);
        $(".register").css("background", ccolor);
    });
    $("#registerbtn").click(function(){
        $(".s4").css("display", "none");
        $(".s3").css("display", "table");
        var rcolor = $(".register").css("background");
        var ccolor = $(".contact").css("background");
        $(".contact").css("background", rcolor);
        $(".register").css("background", ccolor);
    });
});