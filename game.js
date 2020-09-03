var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;



$(document).keypress(function() {

  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }

});



$(".btn").on('click', function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);

});


function nextSequence() {

  userClickedPattern = [];

  level++;
  $('#level-title').text('Level ' + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).fadeTo(100, 0.3, function() {
    $(this).fadeTo(500, 1.0);
  });

  playSound(randomChosenColour);

}

function playSound(name) {
  var sound = new Audio('sounds/' + name + '.mp3');
  sound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('Success');
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log('wrong');
  }


}
