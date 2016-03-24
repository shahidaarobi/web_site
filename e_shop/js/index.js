/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#who").fadeOut(3000, function () {
        //alert("Complete !!");
    });
});
$(document).ready(function () {
    $("#ds").fadeOut(10000, function () {
        //alert("Well Done !!");
    });
});

$(document).ready(function () {
    $("#btn").click(function () {
        alert("Please Fill up Form");
    });
});
$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Fill Your Email & Password");
    });

    $("#pp").mouseenter(function () {
        $(this).fadeTo(1000, 0.5);
    });
    $("#pp").mouseleave(function () {
        $(this).fadeTo(1000, 1);
    });

    $("#e").mouseenter(function () {
        $(this).fadeTo(1000, 0.5);
    });
    $("#e").mouseleave(function () {
        $(this).fadeTo(1000, 1);
    });

    $(":input:text").focusin(function () {
        $("#box").animate({zoom: "150%"}, "slow");
    });
    $(":input:text").focusout(function () {
        $("#box").animate({zoom: "100%"}, "slow");
    });

    $(":input:password").focusin(function () {
        $("#p").animate({zoom: "150%"}, "slow");
    });
    $(":input:password").focusout(function () {
        $("#p").animate({zoom: "100%"}, "slow");
    });
    
     $("#p").keyup(function () {
        var count = $(this).val().length;
        //$(".p_s").text(count);

        if (count < 1) {
            $(".p_s").text("");
            $(".p_s").removeClass("red");
            $(".p_s").removeClass("yellow");
            $(".p_s").removeClass("green");

        }
        else if (count < 6) {
            $(".p_s").text("Weak");
            $(".p_s").addClass("red");
            $(".p_s").removeClass("yellow");
            $(".p_s").removeClass("green");

        }
        else if (count <= 10) {
            $(".p_s").text("good");
            $(".p_s").removeClass("red");
            $(".p_s").addClass("yellow");
            $(".p_s").removeClass("green");

        }
        else {
            $(".p_s").text("Strong");
            $(".p_s").removeClass("red");
            $(".p_s").removeClass("yellow");
            $(".p_s").addClass("green");
        }
       // $(".red").css({"color":"red"});
    });
    $(":input:text").focusin(function () {
        $("#bo").animate({zoom: "150%"}, "slow");
    });
    $(":input:text").focusout(function () {
        $("#bo").animate({zoom: "100%"}, "slow");
    });
    $(":input:password").focusin(function () {
        $("#a").animate({zoom: "150%"}, "slow");
    });
    $(":input:password").focusout(function () {
        $("#a").animate({zoom: "100%"}, "slow");
    });

   
});