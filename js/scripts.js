$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));
  
  if (height>=51) {
    $("#in51").show();
  } else {
    $("#in50").show();
  }
});