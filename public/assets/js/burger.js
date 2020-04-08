


$(".create-burger").on("submit",function(e){console.log("click"),e.preventDefault();var o={burger_name:$("#burger").val().trim()};$.ajax("/api/burgers",{type:"POST",data:o}).then(function(){console.log("New Burger added"),location.reload()})}),$(".devoured").on("click",function(e){console.log("Click");var o=$(this).data("id");$.ajax("/api/burgers/"+o,{type:"PUT",data:!0}).then(function(){console.log("Burger has been destryed by your mouth!"),location.reload()})});