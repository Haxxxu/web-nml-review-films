
$(document).ready(function () {

    if (window.localStorage.getItem("filmPageID") == undefined) {
        displayFilmPage("Dune");
    }
    else {
        displayFilmPage(window.localStorage.getItem("filmPageID"));
    }

    $("#nav-bar a[href='reviewphim.html']").addClass("active");
    $("#nav-bar a[href='reviewphim.html']").css("color", "#DCF836");

    // displayFilmPage(window.localStorage.getItem("filmPageID"));
    
});


function displayFilmPage (id) {
    $("#content-title").append("<h1>" + filmList[id].title + "</h1>")

    $("#img-main > img").attr("src", filmList[id].images["img-main"]);

    $("#content-film-info li[class='thoi-luong']").append("<span>" + filmList[id].info["thoi-luong"] + "</span>")

    
    for (let i = 0; i < filmList[id].info["dao-dien"].length; ++i) {
        if (i == 0) {
            $("#content-film-info li[class='dao-dien']").append("<a href='#'>" + filmList[id].info["dao-dien"][i] + "</a>");
        }
        else {
            $("#content-film-info li[class='dao-dien']").append(", <a href='#'>" + filmList[id].info["dao-dien"][i] + "</a>");
        }
    }

    for (let i = 0; i < filmList[id].info["dien-vien"].length; ++i) {
        if (i == 0) {
            $("#content-film-info li[class='dien-vien']").append("<a href='#'>" + filmList[id].info["dien-vien"][i] + "</a>");
        }
        else {
            $("#content-film-info li[class='dien-vien']").append(", <a href='#'>" + filmList[id].info["dien-vien"][i] + "</a>");
        }
    }

    for (let i = 0; i < filmList[id].info["quoc-gia"].length; ++i) {
        if (i == 0) {
            $("#content-film-info li[class='quoc-gia']").append("<span>" + filmList[id].info["quoc-gia"][i] + "</span>");
        }
        else {
            $("#content-film-info li[class='quoc-gia']").append(", <span>" + filmList[id].info["quoc-gia"][i] + "</span>");
        }
    }

    for (let i = 0; i < filmList[id].info["the-loai"].length; ++i) {
        if (i == 0) {
            $("#content-film-info li[class='the-loai']").append("<span>" + filmList[id].info["the-loai"][i] + "</span>");
        }
        else {
            $("#content-film-info li[class='the-loai']").append(", <span>" + filmList[id].info["the-loai"][i] + "</span>");
        }
    }
    
    $("#content-film-info li[class='khoi-chieu']").append("<span>" + filmList[id].info["khoi-chieu"] + "</span>");


    $("#img-danh-gia > img").attr("src", filmList[id].images["img-danh-gia"]);

    // Desc
    $("#content-description").append("<p>" + filmList[id].description + "</p>");


    // Story
    for (let i = 0; i < filmList[id].story["story-text-1"].length; ++i) {
        $("#content-story-text-1").append("<p>" + filmList[id].story["story-text-1"][i] + "</p>");
    }

    $("#content-trailer").append(filmList[id]["trailer-youtube-iframe"]);

    for (let i = 0; i < filmList[id].story["story-text-2"].length; ++i) {
        $("#content-story-text-2").append("<p>" + filmList[id].story["story-text-2"][i] + "</p>");
    }

    
    // Positive
    for (let i = 0; i < filmList[id].positive["positive-text-1"].length; ++i) {
        $("#content-positive-text-1").append("<p>" + filmList[id].positive["positive-text-1"][i] + "</p>");
    }

    $("#img-1 > img").attr("src", filmList[id].images["img-1"]);
    

    for (let i = 0; i < filmList[id].positive["positive-text-2"].length; ++i) {
        $("#content-positive-text-2").append("<p>" + filmList[id].positive["positive-text-2"][i] + "</p>");
    }

    // Negative
    for (let i = 0; i < filmList[id].negative["negative-text-1"].length; ++i) {
        $("#content-negative-text-1").append("<p>" + filmList[id].negative["negative-text-1"][i] + "</p>");
    }

    $("#img-2 > img").attr("src", filmList[id].images["img-2"]);
    

    for (let i = 0; i < filmList[id].negative["negative-text-2"].length; ++i) {
        $("#content-negative-text-2").append("<p>" + filmList[id].negative["negative-text-2"][i] + "</p>");
    }

    $("#img-3 > img").attr("src", filmList[id].images["img-3"]);


    // Score
    $("#content-score li[class='content-score-imdb']").append("<span>" + filmList[id].score["imdb"] + "</span>");

    $("#content-score li[class='content-score-google']").append("<span>" + filmList[id].score["google"] + "</span>");

    $("#content-score li[class='content-score-rotten-tomatoes']").append("<span>" + filmList[id].score["rotten-tomatoes"] + "</span>");

    $("#content-score li[class='content-score-nml-review']").append("<span>" + filmList[id].score["nml-review"] + "</span>");

    // Conclusion
    $("#content-conclusion > .tom-lai").append("<span>, " + filmList[id].conclusion + "</span>");

    // About Article Author

    for (let i = 0; i < filmList[id]["article-author-info"].length; ++i) {
        $("#content-about-article-author").append("<p><b>" + filmList[id]["article-author-info"][i] + "</b></p>")
    }
}