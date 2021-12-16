$(document).ready(function () {
    
    // displayTheLoaiPage("Hành động");
    alert(theLoaiList["hang-dong"]["filmID"]);
    
});

function displayTheLoaiPage(id) {

    $(".title-content").append("<h2> Thể loại: " + id + "</h2>");


    var dem = 0;



    $(".phim-link").each(function () {

        if (dem < theLoaiList[id]["filmID"].length) {
            alert("helo");
        }

        dem++;
        
    });

    for (let i = 0; i < theLoaiList[id]["filmID"].length; ++i) {
        
    }
}