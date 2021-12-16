$(document).ready(function () {

    $('#multiSlider').multislider({
        interval: 10000,
        slideAll: true,
        duration: 1500
    });

    $(".news-list li").append("<hr/>");
    

    $(".phim-link").each(function() {
        $("#" + this.id + " .image-cover > img").attr("src", filmList[this.id].images["img-main"]);
        $("#" + this.id + " .box-text").append("<h3>" + filmList[this.id].title + "</h3>")
        
    })
    
});

function updateFilmPage(id) {
    window.localStorage.setItem("film-id", id);
}

