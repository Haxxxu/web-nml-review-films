$(document).ready(function(){
    showtintuc(window.localStorage.getItem("tin-tuc-id"));
});
function showtintuc(id){
    $("name").append(tintucList[id].name);
};