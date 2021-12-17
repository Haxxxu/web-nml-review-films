$(document).ready(function () {
    
    
    
    // console.log(theLoaiList["Hàng động"]["filmID"].length);


    if (window.localStorage.getItem("the-loai-id") == undefined) {
        $("#header-the-loai").append("<h1>Thể loại: " + "Hành động" + "</h1>");
        displayTheLoaiPage("Hành động");
    }
    else {
        $("#header-the-loai").append("<h1>Thể loại: " + window.localStorage.getItem("the-loai-id") + "</h1>");
        displayTheLoaiPage(window.localStorage.getItem("the-loai-id"));
    }


    // alert(theLoaiList["Hàng động"]["filmID"][1]);


    

});

function displayTheLoaiPage(id) {

    var count = 0;

    $(".phim-link").each(function() {

        if (count < theLoaiList[id]["filmID"].length) {
            $(this).attr("id", theLoaiList[id]["filmID"][count]);
            // alert(theLoaiList["Hàng động"]["filmID"][count]);

            $("#" + this.id + " .image-cover > img").attr("src", filmList[this.id].images["img-main"]);
            $("#" + this.id + " .box-text").append("<h3>" + filmList[this.id].title + "</h3>")
        }
        
        count++;

    });


}


function updateFilmPage(id) {
    window.localStorage.setItem("film-id", id);
}

function updateTheLoaiPage(id) {
    window.localStorage.setItem("the-loai-id", id);
}