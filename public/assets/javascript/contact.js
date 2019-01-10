$(document).ready(function () {


    var contactForm = $("#contact-form");
    var contactName = $("#name");
    var contactEmail = $("#email");
    var contactMessage = $("#message");

    $(contactForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var newContact = {
            name: contactName.val(),
            email: contactEmail.val(),
            message: contactMessage.val()
        };
        console.log(newContact);
        submitContact(newContact);
    });

    // Submits a new post and brings user to home page upon completion
    function submitContact(Contact) {
        $.post("/api/contact", Contact, function () {
            alert("Email has been sent!")
            window.location.href = "/";
        });

    }

});