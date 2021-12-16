$(document).ready(function () {
    
    if (window.localStorage.getItem("dao-dien-id") == undefined) {
        displayDaoDienInfoPage("Denis Villeneuve");
    }
    else {
        displayDaoDienInfoPage(window.localStorage.getItem("dao-dien-id"));
    }

});

function displayDaoDienInfoPage(id) {

    $("#img-dao-dien > img").attr("src", daoDienList[id].image);
    $("#img-dao-dien > img").css("width", "70%");

    $("#img-dao-dien > .text").append("<h4>" + daoDienList[id].name + "</h4>");

    $("#img-dao-dien > .text").append("<h5>Ngày sinh: " + daoDienList[id].birthdate + "</h5>");

    for (let i = 0; i < daoDienList[id].info.length; ++i) {
        $("#info-dao-dien").append("<p>" + daoDienList[id].info[i] + "</p>")
    }

    var count = 0;

    $(".phim-link").each(function () {

        if (count < daoDienList[id]["director-of-film"].length) {
            $(this).attr("id", daoDienList[id]["director-of-film"][count]);
        }
        
        count++;
    });


}