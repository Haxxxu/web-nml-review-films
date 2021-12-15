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

    $(".phim-link").each(function() {
        $("#" + this.id + " .image-cover > img").attr("src", filmList[this.id].images["img-main"]);
        $("#" + this.id + " .box-text").append("<h3>" + filmList[this.id].title + "</h3>")
    })
    
});