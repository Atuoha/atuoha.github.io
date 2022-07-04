$(function () {
	'use strict';

  /* Color Image */
	(function() {
        $('<div class="ms-tool">'+
        '<a href="#" class="ms-tool-btn in-out">'+
                '<i class="fa fa-cog fa-spin"></i>'+
        '</a>'+
        
        '<div class="option-box-title">'+
            '<h3>Choose Mode</h3>'+
        '</div>'+
        '<ul class="ms-dark">'+
            '<li class="mode"><span id="dark" class="dark"></span></li>'+
            '<li class="mode"><span id="light" class="light"></span></li>'+
        '</ul>'+
    '</div>').appendTo($('body'));
	})();

    /* On click button to open tool box */
	$(".ms-tool-btn").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("in-out")) {
            $(".ms-tool").stop().animate({left: "0px"}, 100);
        } else {
            $(".ms-tool").stop().animate({left: "-158px"}, 100);
        }
        
        $(this).toggleClass("in-out");
        return false;
        
    });

    /* On click Change color */
    $('.colors').on('click', function(){
        $('link[href^="assets/css/color-"]').remove();
        // $('link.dark').remove();
        $(this).removeClass("active");
        var dataValue = $(this).attr('data-color');
        if($(this).hasClass('active')) return;

        $(this).toggleClass('active').siblings().removeClass('active');

        if(dataValue != undefined){
            $("link[href='assets/css/style.css']").after('<link rel="stylesheet" href="assets/css/color-'+dataValue+'.css">');
        }

        return false;
    });

    /* Dark and light mode */
   $('.dark').on('click', function(){
        $('.dark-mode').remove();
        $("link[href='assets/css/responsive.css']").after('<link rel="stylesheet" class="dark-mode" href="assets/css/dark.css">');
    });
    $('.light').on('click', function(){
        $('.dark-mode').remove();
    });

});