var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern=[];

$(".btn").on('click',function(){
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

});


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).fadeTo(100, 0.3, function() {
    $(this).fadeTo(500, 1.0);
  });

  playSound(randomChosenColour);

}

function playSound(name){
  var sound = new Audio('sounds/'+name+'.mp3');
  sound.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");

  setTimeout(function(){ $("#"+currentColour).removeClass("pressed"); }, 100);
}
