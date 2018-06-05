$(document).ready(function(){
    $("#btn-cont").click(function(){
        $("#card-cont").css("display", "block");
        $("#card-reg").css("display", "none");
        var rcolor = $("#card-reg").css("background");
        var ccolor = $("#card-cont").css("background");
        $("#card-cont").css("background", rcolor);
        $("#card-reg").css("background", ccolor);
    });
    $("#btn-reg").click(function(){
        $("#card-cont").css("display", "none");
        $("#card-reg").css("display", "block");
        var rcolor = $("#card-reg").css("background");
        var ccolor = $("#card-cont").css("background");
        $("#card-cont").css("background", rcolor);
        $("#card-reg").css("background", ccolor);
    });
});