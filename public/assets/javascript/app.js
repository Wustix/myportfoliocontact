$(document).ready(function () {



    var contactForm = $("#contact-form");
    var contactName = $("#name");
    var contactEmail = $("#email");
    var contactMessage = $("#message");

    $(contactForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var newMessage = {
            name: contactName.val(),
            email: contactEmail.val(),
            message: contactMessage.val()
        };


        submitContact(newMessage);
        submitMessage(newMessage);
        console.log(newMessage);
        myFunction();


        // Submits a new post and brings user to home page upon completion
        function submitContact(Contact) {
            $.post("/api/contact", Contact, function () {
                


            });
        }

        function submitMessage(Message) {
            $.post("/api/message", Message, function () {

            });

        }

        function myFunction() {
            alert("Email Sent!");
            window.location.href = "/";
        }

    });
});