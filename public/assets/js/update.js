$(function() {
    $(".devour").on("click", function(event) {
        console.log("omnom")
      var id = $(this).data("id");
      var newDevoured = !$(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});  