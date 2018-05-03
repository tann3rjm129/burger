
$(document).ready(function (){
    
    
    //create new burger to be eaten
    $('#addBurger').on("click", function() {
        event.preventDefault();
        
        var newBurger = $('#newBurger').val().trim()

        var data = {
            burger_name: newBurger, 
            devoured: false
        };

        $.post("/", data).then(function(result) {
            $('#newBurger').empty()
            location.reload();
        })
    })

    //devour a burger
    $('.eatButton').on('click', function() {
        
        event.preventDefault();

        var eaten = {
            devoured: true
        };

        var id = event.target.id

        $.ajax('/' + id, {
            type: "PUT",
            data: eaten
        }).then(function(result)  {
            location.reload();
        }
        )
    });

});