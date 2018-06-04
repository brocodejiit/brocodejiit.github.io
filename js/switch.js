<script>
$(document).ready(function(){
    $("#contactbtn").click(function(){
        $(".s4").css("display", "all");
        $(".s3").css("display", "none");
    });
    $("#registerbtn").click(function(){
        $(".s4").css("display", "none");
        $(".s3").css("display", "all");
    });
});
</script>