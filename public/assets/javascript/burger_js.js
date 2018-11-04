$(function () {
    $(".burger-devour").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: id
        }).then(
            function () {
                console.log(`devoured burger id ${id}`);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        if ($("#ca").val() == "") {
            swal({
                title: 'Please input a burger name',
                animation: false,
                customClass: 'animated jackInTheBox'
            });
        } else {
            let newBurger = {
                burger_name: $("#ca").val().trim()
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger, " + newBurger);
                    location.reload();
                }
            );
        }
    });

});