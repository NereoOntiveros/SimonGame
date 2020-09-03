var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).fadeTo(100, 0.3, function() {
    $(this).fadeTo(500, 1.0);
  });

  var sound = new Audio('sounds/'+randomChosenColour+'.mp3');
  sound.play();
}
