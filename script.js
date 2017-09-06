var person = prompt("Hello player, What's your name?"); // prompt with gamer's name

if (person != null) {
    document.getElementById("user").innerHTML =
    "Hello " + person + " let's play";
} // function giving the player's name

$( ".photo" ).draggable(); // Allow elements to be moved using the mouse.
$( ".photo" ).draggable({ revert: "invalid" }); // If the card is not correct, do not accept


$('.square.first').droppable({ // the place where we will move our element
               accept: ".photo#first", // Only accept element with this class
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } ); // If the card was dropped to the correct slot, position it directly on top of the slot
              
                  
               }    
            });


$('.square.second').droppable({
               accept: ".photo#second",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
               
               }    
            });

$('.square.third').droppable({
               accept: ".photo#third",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
               
               }    
            });

$('.square.fourth').droppable({
               accept: ".photo#fourth",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
               
               }    
            });

$('.square.fifth').droppable({
               accept: ".photo#fifth",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
               
               }    
            });

$('.square.sixth').droppable({
               accept: ".photo#sixth",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
               }    
            });

$('.square.seventh').droppable({
               accept: ".photo#seventh",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
                
               }    
            });

$('.square.eighth').droppable({
               accept: ".photo#eighth",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
                
               }    
            });

$('.square.ninth').droppable({
               accept: ".photo#ninth",
               drop: function( event, ui ) {
               ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
                
               }    
            });

 