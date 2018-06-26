$(document).ready(function(){
    const ropacity = $("#btn-reg").css("opacity");
    const copacity = $("#btn-cont").css("opacity");
    var switchReg = "reg";
    $("#btn-cont").click(function(){
        //display exchange
        $("#card-cont").css("display", "block");
        $("#card-reg").css("display", "none");
        //opacity exchange
        if(switchReg=="reg"){
            $("#btn-cont").css("opacity", ropacity);
            $("#btn-reg").css("opacity", copacity);
            switchReg = "cont";
        }
    });
    $("#btn-reg").click(function(){
        //display exchange
        $("#card-cont").css("display", "none");
        $("#card-reg").css("display", "block");
        //opacity exchange
        if(switchReg=="cont"){
            $("#btn-cont").css("opacity", copacity);
            $("#btn-reg").css("opacity", ropacity);
            switchReg = "reg";
        }
    });
});