


$(".create-burger").on("submit", function(event) {
    console.log("click")
    event.preventDefault();

    var newBurg = {
        burger_name: $("#burger").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
    }).then(function(){
        console.log("New Burger added");
        location.reload();
    });
});

$(".devoured").on("click", function(event){
    console.log("Click")
    var id = $(this).data("id");
    var eaten = true;

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten

    }).then(
        function(){
            console.log("Burger has been destryed by your mouth!");
            location.reload();
        }
    );

});