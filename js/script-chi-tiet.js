$(document).ready(function () {
    
    // dislayChiTietPage("tin-01");

    if (window.localStorage.getItem("tin-tuc-id") == undefined) {
        dislayChiTietPage("tin-01");
    }
    else {
        dislayChiTietPage(window.localStorage.getItem("tin-tuc-id"));
    }

});

function dislayChiTietPage(id) {
    
    $("#title-name").append("<h2>" + tintucList[id].name + "</h2>")

    for (let i = 0; i < tintucList[id]["doan-tin-01"].length; ++i) {
        $("#doan-tin-01").append("<p>" + tintucList[id]["doan-tin-01"][i] + "</p>");
    }

    $("#img-01 > img").attr("src", tintucList[id]["img-01"]);

    for (let i = 0; i < tintucList[id]["doan-tin-02"].length; ++i) {
        $("#doan-tin-02").append("<p>" + tintucList[id]["doan-tin-02"][i] + "</p>");
    }

    $("#img-02 > img").attr("src", tintucList[id]["img-02"]);

    for (let i = 0; i < tintucList[id]["doan-tin-03"].length; ++i) {
        $("#doan-tin-03").append("<p>" + tintucList[id]["doan-tin-03"][i] + "</p>");
    }

    for (let i = 0; i < tintucList[id]["img-03"].length; ++i) {
        $("#img-03").append("<img src=" + tintucList[id]["img-03"][i] + " alt=''>");
    }

}