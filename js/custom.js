$(function () {

    $(".btn1").click(function () {
        $(".box").hide();
    });

    $(".btn2").click(function () {
        $(".box").show();
    });

    $(".btn3").click(function () {
        $(".box").toggle();
    });

    $(".box").mouseenter(function () {
        $(".box").css('background', 'green');
    });

    $(".box").mouseleave(function () {
        $(".box").css('background', 'blue');
    });
    
      $(".btn4").click(function () {
        $(".box").slideUp();
    });

    $(".btn5").click(function () {
        $(".box").slideDown();
    });

    
     $(".btn6").click(function () {
        $(".box").slideToggle();
    });




});
