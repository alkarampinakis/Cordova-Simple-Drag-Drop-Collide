
var nonMoving;
var collisionDone = false;

/*---------------------------------------------------------------------------------
Making all the elements of the class "iCanMove" movable inside the div "mainBorder"
and adding them event listeners to call the getCollision function when they have an 
event of dragstart, dragstop or while dragging
-----------------------------------------------------------------------------------*/

$(".iCanMove" ).draggable({ containment:".mainBorder", opacity: 0.8  });
$(".iCanMove" ).each(function(){
    $(this).bind("dragstart",getCollision);
    $(this).bind("dragstop", getCollision);
    $(this).bind("drag",     getCollision);
});

/*---------------------------------------------------------------------------------
Inside getCollision from the event you can get all the info you will need for the 
event and with the function .collision any info about the collision that happened
----------------------------------------------------------------------------------*/
function getCollision(event,ui){
    if(event.type == "dragstart"){
        if( collisionDone && event.currentTarget.id == nonMoving){
            $("#info").html('Oh, thank God '+nonMoving+'..!');
            collisionDone = false;
        }else{
            $("#info").html('Wow Something is Moving!');
        }
    }
    if(event.type == "dragstop" && !collisionDone ){
        $("#info").html('Meh, it Stopped..');
    }
    if($("#player1").collision("#player2").length > 0){
        if($(".ui-draggable-dragging")[0].id == "player1"){
            nonMoving = "player2"
        }else{
            nonMoving = "player1"
        }
        $("#info").html('Oh no! you hit '+nonMoving);
        collisionDone=true;
    }
    if(collisionDone && $("#player1").collision("#player2").length <=0){
        $("#info").html('is '+nonMoving+' ok..?');    
    }
    if(collisionDone && $("#player1").collision("#player2").length <=0 && event.type == "dragstop" ){
        $("#info").html('is '+nonMoving+' ok..?');
    }
}

