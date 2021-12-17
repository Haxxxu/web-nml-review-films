window.localStorage.setItem("count_email", 0);
var emails = [];

function emailSubscribe() {
    let email = $("#email-subscribe").val();
    if (validateEmail(email)) {
        $("#MODAL_CONTENT").html("Email của bạn đã được ghi nhận");

        emails[window.localStorage.getItem("count_email")] = email;
        window.localStorage.setItem("count_email", parseInt(window.localStorage.getItem("count_email")) + 1);

        window.localStorage.setItem("email-subscribed", JSON.stringify(emails));

    } else {
        $("#MODAL_CONTENT").html("Sai định dạng email. Vui lòng nhập lại");
    }
    
}

function validateEmail($email) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReg.test( $email );
}