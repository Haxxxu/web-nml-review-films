$(document).ready(function () {
    
    $(".dien-vien-link").each(function() {
        $("[id='" + this.id + "'] .dien-vien-image-cover > img").attr("src", dienVienList[this.id].image);
        $("[id='" + this.id + "'] .dien-vien-text").append("<h3>" + dienVienList[this.id].name + "</h3>")
        
    })
    
});