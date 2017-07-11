// for (var index=0; index <= 30; index += 5) {
//   alert(index);
// }
//
// for (var index=0; index <= 50; index += 7) {
//   alert(index);
// }

$(document).ready(function() {
  $("form#loopNumbers").submit(function(event) {
    var conditionInput = parseInt($("input#numCondition").val());
    var incrementInput = parseInt($("input#numIncrement").val());
    if (isNaN(conditionInput)) {
      alert("Please enter a number to stop at.")
    } else if (isNaN(incrementInput)) {
      alert("Please enter a number to increment by.")
    } else if (conditionInput < 0) {
      alert("Please enter a positive number to stop at.")
    } else if (incrementInput < 0) {
      alert("Please enter a positive number to increment by.")
    } else if (incrementInput > conditionInput) {
      alert("Please make sure your increment number is smaller than the number to stop at.")
    } else {
      for (var index = incrementInput; index <= conditionInput; index += incrementInput) {
      alert(index);
      }
    }
    event.preventDefault();
  });
});
