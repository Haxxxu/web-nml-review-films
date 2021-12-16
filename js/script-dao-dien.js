$(document).ready(function () {
    
    $(".dao-dien-link").each(function() {
        $("[id='" + this.id + "'] .dao-dien-image-cover > img").attr("src", daoDienList[this.id].image);
        $("[id='" + this.id + "'] .dao-dien-text").append("<h3>" + daoDienList[this.id].name + "</h3>")
        
    })
    
});