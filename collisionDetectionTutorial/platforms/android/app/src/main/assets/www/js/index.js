

$(".iCanMove" ).draggable({ containment:".mainBorder", opacity: 0.8  });
$(".iCanMove" ).each(function(){$(this).bind("dragstart",getCollision);})
$(".iCanMove" ).each(function(){$(this).bind("dragstop", getCollision);})
$(".iCanMove" ).each(function(){$(this).bind("drag",     getCollision);})	

var nonMoving;
var collisionDone = false;
function getCollision(event,ui){
    if(event.type == "dragstart"){
        if( collisionDone){
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
            nonMoving = "Player2"
        }else{
            nonMoving = "Player1"
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