$(document).ready(function () {
    

    displayDaoDienInfoPage("dao-dien-01");

});

function displayDaoDienInfoPage(id) {

    $("#img-dao-dien > img").attr("src", daoDienList[id].image);

    $("#img-dao-dien > .text").append("<h4>" + daoDienList[id].name + "</h4>");

    $("#img-dao-dien > .text").append("<h5>" + daoDienList[id].birthdate + "</h5>");

    for (let i = 0; i < daoDienList[id].info.length; ++i) {
        $("#info-dao-dien").append("<p>" + daoDienList[id].info[i] + "</p>")
    }

    var count = 0;

    $(".phim-link").each(function () {
        $(this).attr("id", daoDienList[id]["director-of-film"][count]);
        alert(daoDienList[id]["director-of-film"][count]);

        count++;
        if (count == daoDienList[id]["director-of-film"].length) {
            return true;
        }
    })


}