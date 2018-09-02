$(function(){
    $(".down-1").mouseover(function(){$(this).children(".down-over").removeClass("x").addClass("y");});
    $(".down-1").mouseout(function(){$(this).children(".down-over").addClass("x")});

    $(".con").mouseover(function(){$(this).children(".con-over").removeClass("x").addClass("y");});
    $(".con").mouseout(function(){$(this).children(".con-over").addClass("x")});

    $(".lx1").mouseover(function(){$(this).children(".lx-over").removeClass("x").addClass("y");});
    $(".lx1").mouseout(function(){$(this).children(".lx-over").addClass("x")});


    $(".lab-over").addClass("os");
    $(".lab-ipt").focus(function(){
        $(this).parent().prev().children(".lab-over").removeClass("os");
    });
    $(".lab-ipt").blur(function(){
        $(this).parent().prev().children(".lab-over").addClass("os");
    });
    $("#nam").blur(function(){
        var n=$(this).val();
        if(n==""){
            alert("名称为空，请重新输入");
            $(this).val("请重新输入")
        }
    });
    $("#site").blur(function(){
        var n=$(this).val();
        if(n==""){
            alert("地址为空，请重新输入");
            $(this).val("请重新输入")
        }
    });
    $("#mail").blur(function(){
        var n=$(this).val();
        var   x=/\w+[@]{1}\w+[.]\w+/;
        if(n==""){
            alert("邮箱为空，请重新输入");
            $(this).val("请重新输入")
        }else if(x.test(n)){}else{
            alert("请输入正确的邮箱地址");
            $(this).val("请重新输入")}
    });
    $("#tel").blur(function(){
        var n=$(this).val();
        var x=/^1\d{10}$/;
        if(n==""){
            alert("号码为空，请重新输入");
            $(this).val("请重新输入")
        }else if(x.test(n)){}else{
            alert("请输入正确的手机号码");
            $(this).val("请重新输入")}
    });

    $(".btc").mouseover(function(){$(this).children(".bt-over").removeClass("x").addClass("y");});
    $(".btc").mouseout(function(){$(this).children(".bt-over").addClass("x")});

});

function move(event) {var x = event.clientX;document.getElementById("img").style.left = -200-x/8 + "px";}

$(window).scroll(function () {
    if ($(window).scrollTop()>300) {
        $("#opp").removeClass("v");
        $("#opp").removeClass("u");
        $("#opp").addClass("u");
    } else {
        $("#opp").addClass("v");
    }
});