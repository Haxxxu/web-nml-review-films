$(document).ready(function () {
    
    if (window.localStorage.getItem("dien-vien-id") == undefined) {
        displayDienVienInfoPage("Timothée Chalamet");
        $("#header-dien-vien").append("Timothée Chalamet");
    }
    else {
        displayDienVienInfoPage(window.localStorage.getItem("dien-vien-id"));
        $("#header-dien-vien").append(window.localStorage.getItem("dien-vien-id"));
    }


});

function displayDienVienInfoPage(id) {

    $("#img-dien-vien > img").attr("src", dienVienList[id].image);
    $("#img-dien-vien > img").css("width", "70%");

    $("#img-dien-vien > .text").append("<h4>" + dienVienList[id].name + "</h4>");

    $("#img-dien-vien > .text").append("<h5>Ngày sinh: " + dienVienList[id].birthdate + "</h5>");

    for (let i = 0; i < dienVienList[id].info.length; ++i) {
        $("#info-dien-vien").append("<p>" + dienVienList[id].info[i] + "</p>")
    }

    var count = 0;

    $(".phim-link").each(function () {

        if (count < dienVienList[id]["actor-of-film"].length) {
            $(this).attr("id", dienVienList[id]["actor-of-film"][count]);
        }
        
        count++;
    });


}