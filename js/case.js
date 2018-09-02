$(function(){
    $(".ttn1").mouseover(function(){$(".tn1-over").removeClass("q").removeClass("p").addClass("p");});
    $(".ttn2").mouseover(function(){$(".tn2-over").removeClass("q").removeClass("p").addClass("p");});
    $(".ttn3").mouseover(function(){$(".tn3-over").removeClass("q").removeClass("p").addClass("p");});
    $(".ttn4").mouseover(function(){$(".tn4-over").removeClass("q").removeClass("p").addClass("p");});
    $(".ttn1").mouseout(function(){$(".tn1-over").addClass("q");});
    $(".ttn2").mouseout(function(){$(".tn2-over").addClass("q");});
    $(".ttn3").mouseout(function(){$(".tn3-over").addClass("q");});
    $(".ttn4").mouseout(function(){$(".tn4-over").addClass("q");});

    $(".min_1_a_icon").addClass("m");
    $(".min_1_a").mouseover(function(){$(this).children('div').children('div').removeClass("m");});
    $(".min_1_a").mouseout(function(){$(this).children('div').children('div').addClass("m");});

    $(".ttn1").click(function(){$(".logo,.move,.media").slideUp(2000);$(".wb").slideDown(2000)});
    $(".ttn2").click(function(){$(".logo,.wb,.media").slideUp(2000);$(".move").slideDown(2000)});
    $(".ttn3").click(function(){$(".move,.wb,.media").slideUp(2000);$(".logo").slideDown(2000)});
    $(".ttn4").click(function(){$(".move,.wb,.logo").slideUp(2000);$(".media").slideDown(2000)});
    $(".color1").click(function(){$(".purple,.yellow,.green,.orange,.blue,.gray").slideUp(2000);$(".red").slideDown(2000)});
    $(".color2").click(function(){$(".red,.yellow,.green,.orange,.blue,.gray").slideUp(2000);$(".purple").slideDown(2000)});
    $(".color3").click(function(){$(".red,.purple,.green,.orange,.blue,.gray").slideUp(2000);$(".yellow").slideDown(2000)});
    $(".color4").click(function(){$(".red,.purple,.green,.orange,.blue,.gray").slideUp(2000);$(".green").slideDown(2000)});
    $(".color5").click(function(){$(".red,.purple,.yellow,.green,.blue,.gray").slideUp(2000);$(".orange").slideDown(2000)});
    $(".color6").click(function(){$(".red,.purple,.yellow,.green,.orange,.gray").slideUp(2000);$(".blue").slideDown(2000)});
    $(".color7").click(function(){$(".red,.purple,.yellow,.green,.orange,.blue").slideUp(2000);$(".gray").slideDown(2000)});

    $(".down-1").mouseover(function(){$(this).children(".down-over").removeClass("x").addClass("y");});
    $(".down-1").mouseout(function(){$(this).children(".down-over").addClass("x")});
});

function move(event) {var x = event.clientX;document.getElementById("img").style.left = -200-x/8 + "px";}

$(window).scroll(function () {
    if ($(window).scrollTop()>450) {
        $("#opp").removeClass("v");
        $("#opp").removeClass("u");
        $("#opp").addClass("u");
    } else {
        $("#opp").addClass("v");
    }
});