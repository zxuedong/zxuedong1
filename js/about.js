$(function() {
    $(".down-1").mouseover(function(){$(this).children(".down-over").removeClass("x").addClass("y");});
    $(".down-1").mouseout(function(){$(this).children(".down-over").addClass("x")});

    $(".us-1").mouseover(function () {$(".us1-over").removeClass("q").removeClass("p").addClass("p");});
    $(".us-2").mouseover(function () {$(".us2-over").removeClass("q").removeClass("p").addClass("p");});
    $(".us-3").mouseover(function () {$(".us3-over").removeClass("q").removeClass("p").addClass("p");});
    $(".us-4").mouseover(function () {$(".us4-over").removeClass("q").removeClass("p").addClass("p");});
    $(".us-1").mouseout(function () {$(".us1-over").addClass("q")});
    $(".us-2").mouseout(function () {$(".us2-over").addClass("q")});
    $(".us-3").mouseout(function () {$(".us3-over").addClass("q")});
    $(".us-4").mouseout(function () {$(".us4-over").addClass("q")});

    $(".tog").mouseover(function(){$(this).children(".togg-over").removeClass("x").addClass("y");});
    $(".tog").mouseout(function(){$(this).children(".togg-over").addClass("x")});

    $(".bd-bd1,.bd-bd2,.bd-bd4").addClass("l");
    $(".us-1").click(function(){$(".bd-bd1").removeClass("l");$(".bd-bd2,.bd-bd3,.bd-bd4").addClass("l");})
    $(".us-2").click(function(){$(".bd-bd2").removeClass("l");$(".bd-bd1,.bd-bd3,.bd-bd4").addClass("l");})
    $(".us-3").click(function(){$(".bd-bd3").removeClass("l");$(".bd-bd2,.bd-bd1,.bd-bd4").addClass("l");})
    $(".us-4").click(function(){$(".bd-bd4").removeClass("l");$(".bd-bd2,.bd-bd3,.bd-bd1").addClass("l");})
});

    function move(event) {var x = event.clientX;document.getElementById("img").style.left = -200-x/8 + "px";}

$(window).scroll(function () {
    if ($(window).scrollTop()>400) {
        $("#opp").removeClass("v");
        $("#opp").removeClass("u");
        $("#opp").addClass("u");
    } else {
        $("#opp").addClass("v");
    }
});