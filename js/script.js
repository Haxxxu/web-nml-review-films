$(document).ready(function () {

    $('#multiSlider').multislider({
        interval: 10000,
        slideAll: true,
        duration: 1500
    });

    $(".news-list li").append("<hr/>");
    
    $("nav [href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
            $(this).css("color", "#DCF836");
        }
    });
});