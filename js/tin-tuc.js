$(document).ready(function(){
    showtintuc(window.localStorage.getItem("tin-tuc-id"));
});
function showtintuc(){
    $("name").append(tintucList[id].name);
};