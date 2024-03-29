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

        submitMessage(newMessage);
        submitContact(newMessage);

        // console.log(newMessage);


        // Submits a new post and brings user to home page upon completion
        function submitContact(Contact) {

            $.post("/contact", Contact, function () {

                $("#bestFriendModal").modal("toggle");
            })
                .done(function () {
                    $("#bestFriendModal").modal("toggle");
                })
                .fail(function () {
                    $("#lastFriendModal").modal("toggle");
                })

        }


    });

    function submitMessage(Message) {
        $.post("/message", Message, function () {
            console.log(Message);
        });
    }

    $("#modal-btn").on("click", function (event) {
        event.preventDefault();
        window.location.href = "/contact";
    })
});