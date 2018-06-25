$(document).ready(function(){
    $("#btn-cont").click(function(){
        //display exchange
        $("#card-cont").css("display", "block");
        $("#card-reg").css("display", "none");
        //opacity exchange
        var ropacity = $("#btn-reg").css("opacity");
        var copacity = $("#btn-cont").css("opacity");
        $("#btn-cont").css("opacity", ropacity);
        $("#btn-reg").css("opacity", copacity);
    });
    $("#btn-reg").click(function(){
        //display exchange
        $("#card-cont").css("display", "none");
        $("#card-reg").css("display", "block");
        //opacity exchange
        var ropacity = $("#btn-reg").css("opacity");
        var copacity = $("#btn-cont").css("opacity");
        $("#btn-cont").css("opacity", ropacity);
        $("#btn-reg").css("opacity", copacity);
    });
});