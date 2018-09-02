$(function(){
    $(".min_1_a_icon").addClass("m");
    $(".min_1_a").mouseover(function(){$(this).children('div').children('div').removeClass("m");});
    $(".min_1_a").mouseout(function(){$(this).children('div').children('div').addClass("m");});

    $(".tj-2").mouseover(function(){$(".tj-over").removeClass("p").removeClass("q").addClass("p");});
    $(".tj-2").mouseout(function(){$(".tj-over").addClass("q");});

    $(".create-age").mouseover(function(){$(".age-over").removeClass("p").removeClass("q").addClass("p");});
    $(".create-age").mouseout(function(){$(".age-over").addClass("q");});

    $(".fen").mouseover(function(){$(this).children('.box-over').removeClass("q").addClass("p");});
    $(".fen").mouseout(function(){$(this).children('.box-over').addClass("q");});

    $(".down-1").mouseover(function(){$(this).children(".down-over").removeClass("q").addClass("p");});
    $(".down-1").mouseout(function(){$(this).children(".down-over").addClass("q")});
});
function move(event) {var x = event.clientX;document.getElementById("img").style.left = 200-x/8 + "px";}
$(window).scroll(function () {
    if ($(window).scrollTop()>950) {
        $("#opp").removeClass("v");
        $("#opp").removeClass("u");
        $("#opp").addClass("u");
    } else {
        $("#opp").addClass("v");
    }
});
