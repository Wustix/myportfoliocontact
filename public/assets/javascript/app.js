$(document).ready(function () {


    var contactForm = $("#contact-Form");
    var contactName = $("#name");
    var contactEmail = $("#email");
    var contactMessage = $("#message");

    $(contactForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var newMessage = {
            Name: contactName.val(),
            Email: contactEmail.val(),
            Message: contactMessage.val(),
        };
        console.log(newMessage);
        submitMessage(newMessage);
    });

    // Submits a new post and brings user to home page upon completion
    function submitMessage(newMessage) {
        $.post("/api/message", newMessage, function () {
            alert("Email has been sent!")
            // window.location.href = "/home";
        });
    }
});