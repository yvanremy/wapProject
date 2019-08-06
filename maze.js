$(document).ready(function() {

    "use strict";
    
  let status = false;
  let hitWall = false;
  $("#start").click(function() {
    $(".boundary").removeClass("youlose");
    status = true;
    hitWall = false;
    $("h1").text("The Amazing Mouse Mase!");
  });

  $("#end").mouseover(function() {
    if (status === true && hitWall === false) {
      $("h1").text("*******Congratulation, You Win :]!!**********");
      status = false;
      hitWall = false;
    } else if (status === false) {
    $("h1").text("!! you need to to click start, for the game to start");
    } else {
    $("h1").text("Sorry, you Lost. :[");
    }
  });

  $(".boundary").mouseover(function() {
    if (status === false) {
      $(".boundary").removeClass("youlose");
    } else {
      hitWall = true;
      $(".boundary").addClass("youlose");
      $("h1").text("Sorry, you Lost. :[");
    }
  });

});
